<template>
  <v-flex xs12 class="mx-auto px-3 pt-3">
    <v-card>
      <v-layout row wrap class="px-2 py-3">
        <v-flex xs11>
          <v-layout row wrap class="px-1">
            <v-flex xs6>
              <h4 class="title">IDR</h4>
            </v-flex>
            <v-flex xs6>
              <h4 class="title text-xs-right">144,044.50</h4>
            </v-flex>
            <v-flex xs12>
              <p class="subheading text-weight-bold xs-12 my-2">IDR - Indonesian Rupiah</p>
            </v-flex>
            <v-flex>
              <p class="mb-0">1 USD = IDR 14,410.45</p>
            </v-flex>

          </v-layout>
        </v-flex>
        <v-flex xs1 align-content-center justify-center class="btn-remove d-flex">
          <v-icon color="white">remove_circle_outline</v-icon>
        </v-flex>
      </v-layout>
    </v-card>
  </v-flex>
</template>

<script>
export default {

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
