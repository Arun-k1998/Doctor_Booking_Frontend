import axios from 'axios'

export const adminApi = axios.create({
    baseURL:'http://localhost:4001/admin'
})
