<template>
    <form @submit.prevent="registerUser">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input v-model="userData.name" type="text" class="form-control" id="name" required>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input v-model="userData.email" type="email" class="form-control" id="email" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input v-model="userData.password" type="password" class="form-control" id="password" required>
      </div>
      <div class="mb-3">
        <label for="role" class="form-label">Role</label>
        <select v-model="userData.role" class="form-select" id="role" required>
          <option value="BUYER">Buyer</option>
          <option value="SELLER">Seller</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useUserStore } from '../store/user';
  
  export default {
    setup() {
      const userStore = useUserStore();
      const userData = ref({
        name: '',
        email: '',
        password: '',
        role: 'BUYER',
      });
  
      const registerUser = async () => {
        try {
          const response = await userStore.registerUser(userData.value);
          console.log('User registered:', response);
          // Reset form atau tampilkan pesan sukses
          userData.value = { name: '', email: '', password: '', role: 'BUYER' };
          alert('User berhasil didaftarkan!');
          
        } catch (error) {
          console.error('Registration failed:', error);
          alert('Gagal mendaftarkan user. Silakan coba lagi.');
        }
      };
  
      return {
        userData,
        registerUser,
      };
    },
  };
  </script>