import axios from 'axios';
import { userGetToken } from './authentication';

const config = {
  host: process.env.REACT_APP_API_HOST
}

const api = axios.create({
  baseURL: `http://${config.host}`,
  headers: {
    Authorization: `Bearer ${userGetToken()}`
  }
})

export default api;