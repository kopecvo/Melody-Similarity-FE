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

      <v-btn
        variant="tonal"
        size="small"
        @click="play()"
      >
        Play melody
      </v-btn>
      <Sequencer />
    </v-main>
  </v-layout>
</template>

<script setup>
    import { useStore } from '@/store/store'
    import {onBeforeMount, onMounted} from "vue"
    import Sequencer from '@/components/Sequencer'
    //import * as MIDI from 'midicube'
    import * as Tone from 'tone'
    import {midiNoteToString} from '@/util/util'

    const store = useStore()

    // create a synth and connect it to the main output (your speakers)
    const synth = new Tone.Synth().toDestination();

    function testTone() {
        // play a middle 'C' for the duration of an 8th note
        synth.triggerAttackRelease("C4", "8n");
        console.log(midiNoteToString(60))
    }

    let callbackId = null
    let currentPosition = 0
    let playing = false

    function play() {
        if (!playing) {
            console.log("started playing")
            currentPosition = 0
            playing = true
            callbackId = setInterval(playNote, 200)
        } else {
            stop()
        }
    }

    function stop() {
        console.log("finished playing")
        clearInterval(callbackId)
        playing = false
    }

    function playNote() {
        if (currentPosition < store.melodyLength) {
            if (store.melody[currentPosition] > 0)
                synth.triggerAttackRelease(midiNoteToString(store.melody[currentPosition]), "8n");
            console.log("playing note" + currentPosition)
            currentPosition++
        } else {
            stop()
        }
    }


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