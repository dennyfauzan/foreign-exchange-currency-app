import Vue from 'vue';
import Vuex from 'vuex';
import axios from '../axios-instance';

const { foreignExchange } = axios;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currencyRates: {},
  },
  mutations: {
    GET_CURRENCY_RATES(state, payload) {
      const currentState = state;
      currentState.currencyRates = payload;
    },
  },
  actions: {
    getCurrencyRates: ({ commit }) => {
      foreignExchange.get('/latest?base=USD')
        .then((response) => {
          if (response.status === 200) {
            commit('GET_CURRENCY_RATES', response.data);
          }
        });
    },
  },
});
