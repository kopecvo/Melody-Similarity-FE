<template>
  <v-btn
    size="large"
    color="success"
    variant="tonal"
    :disabled="sequencerStore.getMelodyNotes < store.minMelodyLengthSearch"
    @click="search"
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
    import axios from "axios"

    const sequencerStore = useSequencerStore()
    const store = useStore()

    function search() {
        axios.post('http://127.0.0.1:8000/api/', {
            inputMelody: sequencerStore.getMelody
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
</script>

<style scoped>

</style>