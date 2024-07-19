<template>
    <form @submit.prevent="loginUser">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input v-model="loginData.email" type="email" class="form-control" id="email" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input v-model="loginData.password" type="password" class="form-control" id="password" required>
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useAuthStore } from '../store/auth';
  
  export default {
    setup() {
      const authStore = useAuthStore();
      const loginData = ref({
        email: '',
        password: '',
      });
  
      const loginUser = async () => {
        try {
          const response = await authStore.loginUser(loginData.value);
          console.log('User logged in:', response);
          alert('Login successful!');
        } catch (error) {
          console.error('Login failed:', error);
          alert('Login failed. Please try again.');
        }
      };
  
      return {
        loginData,
        loginUser,
      };
    },
  };
  </script>
  