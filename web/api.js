// api.js
import axios from 'https://cdn.skypack.dev/axios';

const api = axios.create({
    // O baseURL agora aponta diretamente para a pasta 'assets'
    // Assumindo que seu Live Server serve 'pfe1-lojinha-carrrinho-2025-matheusneves' como raiz
    baseURL: "http://127.0.0.1:5500/web", 
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${localStorage.getItem("token")}`
    }
});

export default api;