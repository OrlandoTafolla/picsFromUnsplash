import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:'Client-ID 7HMi4eMWvLxZHTHJSaEAwnuaIAMEl6u7Ij5edO1pdFk'
    }
})