<script>
import { ref, reactive, watch } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/auth";

export default {
  name: "LoginForm",
  setup() {
    const router = useRouter();
    const authStore = useAuthStore();
    const loading = ref(false);
    const showPassword = ref(false);
    const errors = reactive({
      email: "",
      password: "",
      response: ""
    });

    const data = reactive({
      email: "",
      password: "",
    });

    const validateEmail = (email) => {
      if (!email) {
        errors.email = "";
      } else if (!/^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        errors.email = "Please enter a valid Email Address";
      } else {
        errors.email = "";
      }
    };

    watch(() => data.email, validateEmail);

    const clearEmail = () => {
      data.email = '';
    };

    const forgotPassword = () => {
      console.log('Forgot password clicked');
    };

    const login = async () => {
      validateEmail(data.email);
      if (!errors.email) {
        try {
          loading.value = true;
          const response = await authStore.loginUser(data);
          console.log("User logged in:", response);
          alert("Login successful!");
          router.push("/user"); 
        } catch (error) {
          console.error("Login failed:", error);
          errors.response = "Login failed. Please try again.";
        } finally {
          loading.value = false;
        }
      }
    };

    return {
      data,
      errors,
      loading,
      showPassword,
      login,
      clearEmail,
      forgotPassword,
    };
  },
};
</script>

<template>
  <div class="login-content text-center">
    <img src="../assets/images/ACVLogoGradient.png" alt="ACV Auctions" class="logo mb-4">
    <form @submit.prevent="login">
      <div class="mb-3 position-relative">
        <input
          v-model="data.email"
          type="email"
          class="form-control"
          placeholder="Email Address"
          required
        />
        <div v-if="errors.email" class="text-danger">{{ errors.email }}</div>
        <button v-if="data.email" type="button" class="btn-clear" @click="clearEmail">×</button>
      </div>
      <div class="mb-3 position-relative">
        <input
          v-model="data.password"
          :type="showPassword ? 'text' : 'password'"
          class="form-control"
          placeholder="Password"
          required
        />
        <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
      </div>
      <div class="mb-3 form-check text-start">
        <input v-model="showPassword" type="checkbox" class="form-check-input" id="showPassword">
        <label class="form-check-label" for="showPassword">Show Password</label>
      </div>
      <button type="submit" class="btn btn-primary w-100 login-btn" :disabled="loading">Log In</button>
      <div v-if="errors.response" class="text-danger mt-3">{{ errors.response }}</div>
    </form>
    <p class="mt-3">
      <a href="#" class="text-decoration-none" @click.prevent="forgotPassword">Forgot Password?</a>
    </p>
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
  .btn-clear {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    background: none;
    border: none;
  }
  .text-danger {
    color: red;
  }
</style>
