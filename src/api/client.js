import axios from 'axios';

const client = axios.create({
    baseURL: 'http://localhost:5000/api',
});

client.interceptors.request.use(
    (request) => {
        const data = { ...request.data };
        delete data.id;
        request.data = data;
        return request;
    },
    error => Promise.reject(error),
);

client.interceptors.response.use(
    response => response.data,
    (error) => {
        console.error(error);
        return Promise.reject(error);
    },
);

export default client;
