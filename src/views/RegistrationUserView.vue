<template>    
    <div class="container-fluid p-0 d-flex flex-column min-vh-100">        
        <header class="w-100 py-2 px-4 d-flex justify-content-between align-items-center">
        <img src="../assets/images/ACVLogoGradient.png" alt="ACV Auctions" class="header-logo">
        <div class="d-flex align-items-center">
            <span class="me-3">New to ACV Auctions?</span>
            <button class="btn btn-outline-primary btn-sign-up">SIGN UP</button>
        </div>
        </header>
        <div class="row g-0 flex-grow-1">
        <div class="col-md-6 login-section d-flex align-items-center justify-content-center">
            <div class="login-content text-center">
            <img src="../assets/images/ACVLogoGradient.png" alt="ACV Auctions" class="logo mb-4">
            <form @submit.prevent="handleLogin">
                <div class="mb-3 position-relative">
                <input v-model="email" type="email" class="form-control" placeholder="Email Address" required>
                <button v-if="email" type="button" class="btn-clear" @click="clearEmail">×</button>
                </div>
                <div class="mb-3">
                <input v-model="password" :type="showPassword ? 'text' : 'password'" class="form-control" placeholder="Password" required>
                </div>
                <div class="mb-3 form-check text-start">
                <input v-model="showPassword" type="checkbox" class="form-check-input" id="showPassword">
                <label class="form-check-label" for="showPassword">Show Password</label>
                </div>
                <button type="submit" class="btn btn-primary w-100 login-btn">Log In</button>
            </form>
            <p class="mt-3 text-decoration-none"><a href="#" @click.prevent="forgotPassword">Forgot Password?</a></p>
            <p class="mt-4">Download Our Free App To Transact-On-The-Go!</p>
            <div class="app-stores">
                <a href="https://www.apple.com/app-store/" class="me-2"><img src="../assets/images/download_appstore.svg" alt="App Store"></a>
                <a href="https://play.google.com/store/"><img src="../assets/images/download_playstore.svg" alt="Google Play"></a>
            </div>
            </div>
        </div>
                    </div>
        <footer class="mt-4 p-3">
            <p>&copy; 2024 ACV Auctions, Inc. All Rights Reserved.</p>
            <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a>
        </footer>
    </div>
</template>
  
<script>
  export default {
    name: 'LoginView',
    data() {
      return {
        email: '',
        password: '',
        showPassword: false
      }
    },
    methods: {
      handleLogin() {
        console.log('Login attempted with:', this.email, this.password)
      },
      clearEmail() {
      this.email = '';
      },      
      forgotPassword() {        
        console.log('Forgot password clicked')
      },
      
    }
  }
</script>
  
<style scoped>
.container-fluid {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-logo {
  height: 50px;
}

.btn-sign-up {
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
}

.login-section, .clearcar-section {
  height: calc(100vh - 60px - 56px);
  overflow-y: auto;
}

.login-content {
  width: 100%;
  max-width: 600px;
  padding: 2rem;
}

.clearcar-section {
    max-width: 600px;
    padding: 2rem;
    margin-right: 150px;
}

.logo {
  max-width: 260px;
}

.login-btn {
  background: linear-gradient(to right, #ff7043, #a12600);
  border-radius: 30px;
  border: none;
  padding: 10px;
  font-weight: bold;
}

.app-stores img {
  height: 200px;
}

.clearcar-title {
  color: #0077be;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.clearcar-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
}

footer {
  background-color: #f8f9fa;
  text-align: center;
  font-size: 0.9rem;
  margin-top: auto;
}

.form-control {
  border-radius: 0;
  border: none;
  border-bottom: 1px solid #ced4da;
  padding: 0.5rem 0;
}

.form-control:focus {
  box-shadow: none;
  border-color: #ff5722;
}

.text-decoration-none {
    text-decoration: none;
}

.btn-clear {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #6c757d;
  cursor: pointer;
}

.btn-outline-primary {
  color: #0077be;
  border-color: #0077be;
}

.btn-outline-primary:hover {
  background-color: #0077be;
  color: white;
}


.btn-outline-primary {
  color: #0077be;
  border-color: #0077be;
}

.btn-outline-primary:hover {
  background-color: #0077be;
  color: white;
}


.btn-outline-primary {
  color: #0077be;
  border-color: #0077be;
}

.btn-outline-primary:hover {
  background-color: #0077be;
  color: white;
}


.btn-outline-primary {
  color: #0077be;
  border-color: #0077be;
}

.btn-outline-primary:hover {
  background-color: #0077be;
  color: white;
}
</style>