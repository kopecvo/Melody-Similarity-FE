<template>
  <v-btn
    size="large"
    color="success"
    variant="tonal"
    :disabled="sequencerStore.getMelodyNotes < store.minMelodyLengthSearch"
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
    import {useSequencerStore} from "@/store/sequencerStore";
    import {useStore} from "@/store/store";

    const sequencerStore = useSequencerStore()
    const store = useStore()
</script>

<style scoped>

</style>