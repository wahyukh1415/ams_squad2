<template>
  <div class="container mt-5">
    <h2>Registrasi User</h2>
    <form @submit.prevent="registerUser">
      <div class="mb-3">
        <label for="name" class="form-label">Nama</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="user.name"
          required
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="user.email"
          required
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="user.password"
          required
        />
      </div>
      <div class="mb-3">
        <label for="role" class="form-label">Role</label>
        <select class="form-select" id="role" v-model="user.role" required>
          <option value="BUYER">Buyer</option>
          <option value="SELLER">Seller</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Daftar</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useUserStore } from "../store/userStore";

export default {
  setup() {
    const userStore = useUserStore();
    const user = ref({
      name: "",
      email: "",
      password: "",
      role: "BUYER",
    });

    const registerUser = async () => {
      try {
        await userStore.registerUser(user.value);
        alert("Registrasi berhasil!");
        resetForm();
      } catch (error) {
        alert("Terjadi kesalahan saat registrasi.");
      }
    };

    const resetForm = () => {
      user.value = {
        name: "",
        email: "",
        password: "",
        role: "BUYER",
      };
    };

    return {
      user,
      registerUser,
    };
  },
};
</script>
