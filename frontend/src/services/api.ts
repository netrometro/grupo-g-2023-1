import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://ecoaware-api.onrender.com',
});