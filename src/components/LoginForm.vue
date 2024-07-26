<script>
import { ref } from "vue";
import { useAuthStore } from "../store/auth";

export default {
  name: "LoginForm",
  setup() {
    const authStore = useAuthStore();
    const loginData = ref({
      email: "",
      password: "",
    });
    const showPassword = ref(false);

    const loginUser = async () => {
      try {
        const response = await authStore.loginUser(loginData.value);
        console.log("User logged in:", response);
        alert("Login successful!");
      } catch (error) {
        console.error("Login failed:", error);
        alert("Login failed. Please try again.");
      }
    };

    const clearEmail = () => {
      loginData.value.email = '';
    };

    const forgotPassword = () => {
      console.log('Forgot password clicked');
    };

    return {
      loginData,
      showPassword,
      loginUser,
      clearEmail,
      forgotPassword,
    };
  },
};
</script>

<template>
  <div class="login-content text-center">
    <img src="../assets/images/ACVLogoGradient.png" alt="ACV Auctions" class="logo mb-4">
    <form @submit.prevent="loginUser">
      <div class="mb-3 position-relative">
        <input v-model="loginData.email" type="email" class="form-control" placeholder="Email Address" required>
        <button v-if="loginData.email" type="button" class="btn-clear" @click="clearEmail">×</button>
      </div>
      <div class="mb-3">
        <input v-model="loginData.password" :type="showPassword ? 'text' : 'password'" class="form-control" placeholder="Password" required>
      </div>
      <div class="mb-3 form-check text-start">
        <input v-model="showPassword" type="checkbox" class="form-check-input" id="showPassword">
        <label class="form-check-label" for="showPassword">Show Password</label>
      </div>
      <button type="submit" class="btn btn-primary w-100 login-btn">Log In</button>
    </form>
    <p class="mt-3"><a href="#" class="text-decoration-none" @click.prevent="forgotPassword">Forgot Password?</a></p>
    <p class="mt-4">Download Our Free App To Transact-On-The-Go!</p>
    <div class="app-stores">
      <a href="https://www.apple.com/app-store/" class="me-2"><img src="../assets/images/download_appstore.svg" alt="App Store"></a>
      <a href="https://play.google.com/store/"><img src="../assets/images/download_playstore.svg" alt="Google Play"></a>
    </div>
  </div>
</template>

<style scoped>
  .login-content {
    max-width: 600px;
    width: 100%;
  }
  .login-btn {
    background: linear-gradient(to right, #ff7043, #a12600);
    border-radius: 30px;
    border: none;
    padding: 10px;
    font-weight: bold;
  }
  .text-decoration-none {
    text-decoration: none;
  }
</style>
