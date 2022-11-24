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
  </div>
</template>

<script setup>
    import {useStore} from "@/store/store";

    const store = useStore()
</script>

<style scoped lang="sass">
.searchSettings
  margin: 10px
</style>