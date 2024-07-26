<template>
  <div class="container-fluid p-0 d-flex flex-column min-vh-100">
    <header class="w-100 py-2 px-4 d-flex justify-content-between align-items-center">
      <img src="../assets/images/ACVLogoGradient.png" alt="ACV Auctions" class="header-logo">
      <div class="d-flex align-items-center">
        <span class="me-3">Already have an account?</span>
        <router-link to="/login">
          <button class="btn btn-outline-primary btn-sign-in">SIGN IN</button>
        </router-link>
      </div>
    </header>
    <div class="d-flex align-items-center justify-content-center flex-grow-1">
      <RegisterForm />
    </div>
    <footer class="mt-4 p-3 text-center">
      <p>&copy; 2024 ACV Auctions, Inc. All Rights Reserved.</p>
      <a href="https://www.acvauctions.com/legal/terms-of-service" class="text-decoration-none">Terms of Service</a> | <a href="https://www.acvauctions.com/legal/privacy-policy" class="text-decoration-none">Privacy Policy</a>
    </footer>
  </div>
</template>

<script>
import RegisterForm from '../components/RegistrationForm.vue';
import "../assets/style.css";
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
  name: 'RegisterView',
  components: {
    RegisterForm
  }
}
</script>

<style scoped>
  
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  footer {
    text-align: center;
  }
</style>
