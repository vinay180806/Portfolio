import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getProjects = async () => {
    const response = await api.get('/projects');
    return response.data;
};

export const getExperience = async () => {
    const response = await api.get('/experience');
    return response.data;
};

export const getSkills = async () => {
    const response = await api.get('/skills');
    return response.data;
};

export const submitContact = async (formData) => {
    const response = await api.post('/contact', formData);
    return response.data;
};
