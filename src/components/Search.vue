<template>
  <v-btn
    size="large"
    color="success"
    variant="tonal"
    :disabled="store.getMelodyNotes < store.minMelodyLengthSearch"
  >
    Search
  </v-btn>
  <h4>Or...</h4>
  <v-btn
    color="success"
    variant="tonal"
    :disabled="true"
  >
    Search MIDI file
  </v-btn>
</template>

<script setup>
    import {useStore} from "@/store/store";

    const store = useStore()
</script>

<style scoped>

</style>