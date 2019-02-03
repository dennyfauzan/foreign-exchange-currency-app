<template>
  <v-container class="mt-3">
    <currency-container>
      <currency-box></currency-box>
      <currency-box></currency-box>
    </currency-container>
  </v-container>
</template>

<script>
import CurrencyContainer from '@/components/CurrencyContainer.vue';
import CurrencyBox from '@/components/CurrencyBox.vue';

export default {
  components: {
    CurrencyContainer,
    CurrencyBox,
  },
};
</script>
