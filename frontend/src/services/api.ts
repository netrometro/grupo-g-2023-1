import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://ecoaware-cm57.onrender.com',
});