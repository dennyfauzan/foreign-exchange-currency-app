<template>
  <v-flex xs12 class="mx-auto px-3 pt-3" :class="detail.currency">
    <v-card>
      <v-layout row wrap class="px-2 py-3">
        <v-flex xs11>
          <v-layout row wrap class="px-1">
            <v-flex xs6>
              <h4 class="title">{{ detail.currency }}</h4>
            </v-flex>
            <v-flex xs6>
              <h4 class="title text-xs-right">{{ detail.totalAmount | currency('') }}</h4>
            </v-flex>
            <v-flex xs12>
              <p class="subheading text-weight-bold xs-12 my-2">
                {{ detail.currency }} - {{ currencyName }}
              </p>
            </v-flex>
            <v-flex>
              <p class="mb-0">1 USD = {{ detail.currency }} {{ detail.perUsd | currency('') }}</p>
            </v-flex>

          </v-layout>
        </v-flex>
        <v-flex
          xs1
          align-content-center
          justify-center
          @click="removeBox(detail.currency)"
          class="btn-remove d-flex">
          <v-icon color="white">remove_circle_outline</v-icon>
        </v-flex>
      </v-layout>
    </v-card>
  </v-flex>
</template>

<script>
import { currencies } from 'country-data';

export default {
  name: 'currencyBox',
  methods: {
    removeBox(id) {
      this.$emit('removeSelectedCurrency', id);
    },
  },
  computed: {
    currencyName() {
      return currencies[this.detail.currency].name;
    },
  },
  props: {
    detail: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
  .btn-remove {
    background: #E13968;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 40px;
  }
</style>
