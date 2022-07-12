import axios from "axios";

export const api = axios.create({
    baseURL: 'https://finance-app-ten.vercel.app/api',
})
