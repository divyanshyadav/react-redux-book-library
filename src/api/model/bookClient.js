import apiClient from '../client';

const client = {};

client.search = text => apiClient.get(`/books?search=${text}`);
client.getById = id => apiClient.get(`/books/${id}`);
client.create = body => apiClient.post('/books', body);
client.updateById = (id, body) => apiClient.put(`/books/${id}`, body);
client.deleteById = id => apiClient.delete(`/books/${id}`);

export default client;
