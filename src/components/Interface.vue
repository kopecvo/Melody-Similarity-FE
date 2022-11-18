<template>
  <v-layout>
    <v-main
      style="background-color: #182126"
    >
      <v-btn
        variant="tonal"
        @click="store.resetMelody()"
      >
        Reset
      </v-btn>
      <v-btn
        variant="tonal"
        @click="store.printMelody()"
      >
        Log melody
      </v-btn>
      <div
        class="keypad"
      >
        <NoteColumn
          v-for="(note, i) in store.melodyLength"
          :position-in-melody=i
        />
      </div>
    </v-main>
  </v-layout>
</template>

<script setup>
    import NoteColumn from '@/components/NoteColumn'
    import { useStore } from '@/store/store'
    import {onBeforeMount} from "vue";

    const store = useStore()

    onBeforeMount(() => {
        store.initMelody()
    })
</script>

<style scoped lang="sass">
.keypad
  display: flex
  flex-direction: row
</style>
