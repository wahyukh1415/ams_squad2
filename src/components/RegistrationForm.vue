<script>
import { ref } from "vue";
import { useUserStore } from "../store/user";

export default {
  name: "RegisterForm",
  setup() {
    const userStore = useUserStore();
    const userData = ref({
      name: "",
      email: "",
      password: "",
      role: "BUYER",
    });
    const showPassword = ref(false);

    const registerUser = async () => {
      try {
        const response = await userStore.registerUser(userData.value);
        console.log("User registered:", response);
        userData.value = { name: "", email: "", password: "", role: "BUYER" };
        alert("User successfully registered!");
      } catch (error) {
        console.error("Registration failed:", error);
        alert("Failed to register user. Please try again.");
      }
    };

    const clearEmail = () => {
      userData.value.email = '';
    };

    return {
      userData,
      showPassword,
      registerUser,
      clearEmail,
    };
  },
};
</script>

<template>
  <div class="register-content text-center">
    <img src="../assets/images/ACVLogoGradient.png" alt="ACV Auctions" class="logo mb-4">
    <form @submit.prevent="registerUser">
      <div class="mb-3 position-relative">
        <input v-model="userData.name" type="text" class="form-control" placeholder="Name" required>
      </div>
      <div class="mb-3 position-relative">
        <input v-model="userData.email" type="email" class="form-control" placeholder="Email Address" required>
        <button v-if="userData.email" type="button" class="btn-clear" @click="clearEmail">×</button>
      </div>
      <div class="mb-3">
        <input v-model="userData.password" :type="showPassword ? 'text' : 'password'" class="form-control" placeholder="Password" required>
      </div>
      <div class="mb-3 form-check text-start">
        <input v-model="showPassword" type="checkbox" class="form-check-input" id="showPassword">
        <label class="form-check-label" for="showPassword">Show Password</label>
      </div>
      <div class="mb-3">
        <label for="role" class="form-label">Role</label>
        <select v-model="userData.role" class="form-select" id="role" required>
          <option value="BUYER">Buyer</option>
          <option value="SELLER">Seller</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary w-100 register-btn">Sign Up</button>
    </form>
  </div>
</template>

<style scoped>
  .register-content {
    max-width: 600px;
    width: 100%;
  }
  .register-btn {
    background: linear-gradient(to right, #ff7043, #a12600);
    border-radius: 30px;
    border: none;
    padding: 10px;
    font-weight: bold;
  }
  </style>
