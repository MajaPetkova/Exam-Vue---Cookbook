import axios from 'axios';

const axiosCookbook = axios.create({
  baseURL: 'http://localhost:3030',
});

export default axiosCookbook;
