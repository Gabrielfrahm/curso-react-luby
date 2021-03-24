import axios from 'axios';

const api = axios.create({
    baseURL: 'https://curso-react-b3bd8-default-rtdb.firebaseio.com/'
});

export default api;