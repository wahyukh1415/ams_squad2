<template>
    <div class="container">
      <h1 class="my-4">User Registration and Login</h1>
      <div class="row">
        <div class="col-md-6">
          <h2>Register User</h2>
          <RegistrationForm />
        </div>
        <div class="col-md-6">
          <h2>Login</h2>
          <LoginForm />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-md-12">
          <UserList />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import 'bootstrap/dist/css/bootstrap.min.css';
  import RegistrationForm from '../components/RegistrationForm.vue';
  import LoginForm from '../components/LoginForm.vue';
  import UserList from '../components/UserList.vue';
  
  
  export default {
    components: {
      RegistrationForm,
      LoginForm,
      UserList,
    },
  };
  </script>
  
  