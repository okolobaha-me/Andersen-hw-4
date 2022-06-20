import axios from 'axios';

const BASE_AVATAR =
  'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg';

axios.defaults.baseURL = 'https://api.escuelajs.co/api/v1';

export const tokenOptions = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    window.localStorage.setItem('token', token);
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
    window.localStorage.removeItem('token');
  },
};

export const register = ({ name, email, password }) => {
  console.log(name, email, password);
  return axios
    .post('/users', {
      name,
      email,
      password,
      avatar: BASE_AVATAR,
    })
    .then(res => res.data);
};

export const auth = async (email, password) => {
  return await axios
    .post('/auth/login', { email, password })
    .then(r => {
      tokenOptions.set(r.data.access_token);
      return axios.get('/auth/profile');
    })
    .then(r => r.data);
};

export const getUserData = async () => {
  return await axios.get('/auth/profile').then(r => r.data);
};
