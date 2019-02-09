<template>
  <v-container class="mt-3">
    <currency-container
      :currencyRates="rates">
    </currency-container>
  </v-container>
</template>

<script>
import CurrencyContainer from '@/components/CurrencyContainer.vue';
import { mapState } from 'vuex';

export default {
  name: 'Home',
  computed: {
    ...mapState({
      currencyRates: state => state.currencyRates,
    }),
    rates() {
      return this.currencyRates.rates ? this.currencyRates.rates : {};
    },
  },
  components: {
    CurrencyContainer,
  },
  created() {
    this.$store.dispatch('getCurrencyRates');
  },
};
</script>
