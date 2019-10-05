import axios from 'axios';

//IP da maquina pode mudar!
const api = axios.create({
    baseURL: 'http://192.168.0.107:3333',
});

export default api;