import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/episode'
})