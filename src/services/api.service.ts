import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWFhZGFhYjYwODBhOTliZDFlNWY0ZjE0ZWM1Zjk4YyIsIm5iZiI6MTc1MDMzMDE3MS42MjEsInN1YiI6IjY4NTNlYjNiNjk5MWI2NTZiODVkODhhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o3JoYTTNJRpFH16D9p-7lHuGm_L8veU1iqWeC4jQnNg'
    }
})

export const imageBaseURL = 'https://image.tmdb.org/t/p/w500'

export const localBaseUrlApi = 'http://localhost:3000/api'


