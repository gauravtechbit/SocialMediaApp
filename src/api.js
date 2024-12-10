// src/services/api.js
import axios from 'axios';

const API = axios.create({ baseURL: 'https://localhost:7185/api' });

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptor for handling errors
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Redirect to login on unauthorized errors
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth endpoints
export const loginUser = (data) => API.post('/user/login', data);
export const signUpUser = (data) => API.post('/user/signup', data);

// Post endpoints
export const fetchPosts = () => API.get('/post');
export const createPost = (data) => API.post('/post', data);
export const updatePost = (data) => API.put(`/post`, data);
export const deletePost = (id) => API.delete(`/post/${id}`);
