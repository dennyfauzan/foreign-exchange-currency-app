<template>
  <v-container class="mt-3">
    <currency-container
      :currencyRates="rates">
    </currency-container>
  </v-container>
</template>

<script>
import CurrencyContainer from '@/components/CurrencyContainer.vue';
import axios from '@/../axios-instance';

const { foreignExchange } = axios;

export default {
  name: 'Home',
  data() {
    return {
      rates: {},
    };
  },
  components: {
    CurrencyContainer,
  },
  created() {
    foreignExchange.get('/latest?base=USD')
      .then((response) => {
        const { rates } = response.data;
        this.rates = rates;
      });
  },
};
</script>
