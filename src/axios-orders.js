import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://hamburger-react-app-9e9ba.firebaseio.com/'
})

export default instance;