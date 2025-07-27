import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'; // fallback

axios.defaults.baseURL = API_URL;  // <-- set baseURL to your backend URL
axios.defaults.withCredentials = true; // send cookies with requests

export const getCsrfCookie = () => axios.get('/sanctum/csrf-cookie');

export const login = (email: string, password: string) =>
  axios.post('/login', { email, password });

export const register = (name: string, email: string, password: string, password_confirmation: string) =>
  axios.post('/register', { name, email, password, password_confirmation });

export const logout = () => axios.post('/logout');

export const getUser = (token:string) => 
  axios.get('/user', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
