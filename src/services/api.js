import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

const CEK_TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsInJvbGUiOiJBRE1JTiIsImlhdCI6MTcyMTM4NTI3NDY3NSwiZXhwIjo4NjQwMDAwMH0.UYt3YI97bf0yVX9vhn9G4d5gNU6U8qeSMjimnijyz90";

api.interceptors.request.use((config) => {
  if (config.url.includes("/register-buyer")) {
    config.headers.Authorization = `Bearer ${CEK_TOKEN}`;
  } else if (config.url.includes("/register-seller")) {
    config.headers.Authorization = `Bearer ${CEK_TOKEN}`;
  } else {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export default api;
