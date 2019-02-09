<template>
  <v-flex xs12 sm5 mx-auto>
      <v-card class="pb-4">
        <v-card-title primary-title>
          <v-layout row wrap>
            <v-flex xs12 class="mb-3">
              <h4 class="subheading font-weight-regular font-italic">USD United States Dollars</h4>
            </v-flex>
            <v-flex xs6>
              <h2 class="headline font-weight-bold">USD</h2>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                class="input-number headline font-weight-bold mt-0 pt-0 pl-4 text-xs-right"
                type="number"
                name="amount"
                prepend-icon="attach_money"
                v-model="amount"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-title>
        <v-divider></v-divider>

        <!-- CurrencyBox -->
        <currency-box
          v-for="(box, i) in detailCurrency"
          :key="`${box}${i}`"
          :detail="detailCurrency[i]"
          @removeSelectedCurrency="removeCurrency($event)"
        >
        </currency-box>

        <v-flex xs12 class="mx-auto px-3 pt-3 mt-3">
          <v-layout row wrap class="px-2 py-3">
            <v-flex xs12>
              <v-select
              :items="countryCurrency"
              v-model="selectedCurrency"
              label="Select"
              multiple
              chips
              hint="What are the target regions"
              persistent-hint>
              </v-select>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-card>
    </v-flex>
</template>

<script>
import currencyBox from '@/components/CurrencyBox.vue';

export default {
  name: 'CurrencyContainer',
  components: {
    currencyBox,
  },
  data() {
    return {
      amount: 10,
      selectedCurrency: [],
    };
  },
  props: {
    currencyRates: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    removeCurrency(val) {
      const result = this.selectedCurrency.filter(el => el !== val);
      this.selectedCurrency = result;
    },
  },
  computed: {
    countryCurrency() {
      return this.currencyRates ? Object.keys(this.currencyRates).sort() : [];
    },
    detailCurrency() {
      return this.selectedCurrency.map((rateDetail, i) => (
        {
          perUsd: this.currencyRates[rateDetail],
          currency: rateDetail,
          totalAmount: (this.amount * (this.currencyRates[rateDetail])),
          id: (i + 1),
        }
      ));
    },
  },
};
</script>

<style lang="scss">
  input[name="amount"] {
    text-align: right;
  }
</style>
