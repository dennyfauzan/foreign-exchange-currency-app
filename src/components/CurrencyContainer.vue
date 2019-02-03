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
                class="headline font-weight-bold mt-0 pt-0 pl-4 text-xs-right"
                type="number"
                name="amount"
                prepend-icon="attach_money"
                v-model="amount"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-title>
        <v-divider></v-divider>
        <slot></slot>
      </v-card>
    </v-flex>
</template>

<script>
export default {
  data() {
    return {
      amount: 10,
    };
  },
};
</script>

<style lang="scss">
  input[name="amount"] {
    text-align: right;
  }
</style>
