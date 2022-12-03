import axios from 'axios';
export const assetUrl = 'http://172.20.10.3:3001/uploads/';
export const BASE_URL = axios.defaults.baseURL = 'http://26.34.72.243:8080/api';
export const BASE_URL_AUTH = 'http://26.34.72.243:8080/api';

export {default as local} from './local.json'