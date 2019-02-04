import axios from 'axios';

const foreignExchange = axios.create({
  baseURL: process.env.VUE_APP_URL_EXCHANGE_RATE,
});

export default {
  foreignExchange,
};
