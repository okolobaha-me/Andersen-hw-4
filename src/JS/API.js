import axios from 'axios';

axios.defaults.baseURL = 'https://fakestoreapi.com';

export const logIn = (username, password) => {
  axios
    .post('/auth/login', {
      username: 'mor_2314',
      password: '83r5^_',
    })
    .then(r => {
      console.log(r.data);
    });
};

export const register = () => {};
