import axios from 'axios';

const api = axios.create({
    baseURL: "http://10.75.20.120:3000"
})

export default api;