<template>
  <div
    class="searchSettings"
  >
    <v-btn
      icon="mdi-close"
      variant="flat"
      @click="store.showSettings = !store.showSettings"
    >

    </v-btn>
    <h3>
      Search settings
    </h3>
    <v-radio-group
      v-model="store.chosenSearchFn"
      column
      label="Search function:"
    >
      <v-radio
        label="LCS"
        color="primary"
        value="lcs"
      ></v-radio>
      <v-radio
        label="DTW"
        color="primary"
        value="dtw"
      ></v-radio>
    </v-radio-group>

    <div class="text-caption">Number of top results</div>
    <v-slider
      v-model="store.numOfResults"
      class="align-center"
      step="1"
      max="10"
      min="1"
    >
      <template v-slot:append>
        <v-text-field
          v-model="store.numOfResults"
          type="number"
          style="width: 80px"
          density="compact"
          hide-details
          variant="outlined"
        ></v-text-field>
      </template>
    </v-slider>
  </div>
</template>

<script setup>
    import {useStore} from "@/store/store";
    import {ref} from "vue";

    const store = useStore()
</script>

<style scoped lang="sass">
.searchSettings
  margin: 10px
</style>