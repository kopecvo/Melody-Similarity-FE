<template>
  <v-layout>
    <v-main
      style="background-color: #182126"
    >
      <v-btn
        variant="tonal"
        size="small"
        @click="store.resetMelody()"
      >
        Reset
      </v-btn>
      <v-btn
        variant="tonal"
        size="small"
        @click="store.printMelody()"
      >
        Log melody
      </v-btn>
      <Sequencer />
    </v-main>
  </v-layout>
</template>

<script setup>
    import { useStore } from '@/store/store'
    import {onBeforeMount} from "vue";
    import Sequencer from '@/components/Sequencer'

    const store = useStore()

    onBeforeMount(() => {
        store.initMelody()
    })
</script>