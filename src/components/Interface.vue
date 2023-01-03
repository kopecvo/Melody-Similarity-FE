<template>
  <v-layout>
    <v-navigation-drawer
      theme="dark"
      permanent
      location="right"
      v-model="store.showSettings"
    >
      <SearchSettings />
    </v-navigation-drawer>
    <v-main
      class="page"
    >
      <Sequencer
        :synth="synth"
      />
      <Search />
      <Results
        :synth="synth"
      />
    </v-main>
  </v-layout>
</template>

<script setup>
    import { useSequencerStore } from '@/store/sequencerStore'
    import {useStore} from "@/store/store";
    import {onBeforeMount, onMounted, ref} from "vue"
    import Sequencer from '@/components/sequencer/Sequencer'
    import Search from '@/components/Search'
    import Results from "@/components/results/Results";
    import SearchSettings from "@/components/SearchSettings";
    import * as Tone from 'tone'

    const sequencerStore = useSequencerStore()
    const store = useStore()

    // Create a piano synth and connect it to the main output (your speakers)
    // This synth also gets passed to other components as a prop, since it doesn't work when it's loaded
    // with Pinia (probably something DOM related)
    const synth = new Tone.Sampler({
        urls: {
            C4: "C4.mp3",
            A4: "A4.mp3",
            C5: "C5.mp3",
            A5: "A5.mp3",
            C6: "C6.mp3",
            A6: "A6.mp3",
        },
        release: 1,
        baseUrl: "https://tonejs.github.io/audio/salamander/",
    }).toDestination();

    onBeforeMount(() => {
        sequencerStore.initMelody()
    })

    onMounted(() => {
    })
</script>

<style scoped lang="sass">
.page
  background-color: #182126

</style>