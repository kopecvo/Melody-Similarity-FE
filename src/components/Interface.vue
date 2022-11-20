<template>
  <v-layout>
    <v-main
      class="page"
    >
      <Sequencer
        :synth="synth"
      />
      <Search />
    </v-main>
  </v-layout>
</template>

<script setup>
    import { useStore } from '@/store/store'
    import {onBeforeMount, onMounted} from "vue"
    import Sequencer from '@/components/sequencer/Sequencer'
    import Search from '@/components/Search'
    //import * as MIDI from 'midicube'
    import * as Tone from 'tone'

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

    /*function loadMidi() {
        MIDI.loadPlugin({
            soundfontUrl: "https://gleitz.github.io/midi-js-soundfonts/FatBoy/",
            instrument: "acoustic_grand_piano",
            onerror: console.warn,
            onsuccess: () => {
                console.log("NIgga")
                // MIDI.noteOn(0, 60, 0);
            }
        });
        midiLoaded = true
    }*/

    onBeforeMount(() => {
        store.initMelody()
    })

    onMounted(() => {
    })
</script>

<style scoped lang="sass">
.page
  background-color: #182126

</style>