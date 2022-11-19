<template>
  <v-layout>
    <v-main
      style="background-color: #182126"
    >
      <v-btn
        variant="tonal"
        size="small"
        @click="store.resetMelody()"
        v-if="false"
      >
        Reset
      </v-btn>

      <v-btn
        variant="outlined"
        icon
        size="large"
        @click="play()"
      >
        <v-icon
          v-if="store.playing"
        >
          mdi-stop
        </v-icon>
        <v-icon
          v-else
        >
          mdi-play
        </v-icon>
      </v-btn>
      <v-btn
        variant="outlined"
        icon
        @click="store.resetMelody()"
      >
        <v-icon>mdi-trash-can-outline</v-icon>
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

    function play() {
        if (!store.playing) {
            console.log("started playing")
            store.playPosition = -1
            store.playing = true
            callbackId = setInterval(playNote, 200)
        } else {
            stop()
        }
    }

    function stop() {
        console.log("finished playing")
        clearInterval(callbackId)
        store.playing = false
        store.playPosition = -1
    }

    function playNote() {
        if (store.playPosition < store.melodyLength) {
            store.playPosition++
            if (store.melody[store.playPosition] > 0)
                synth.triggerAttackRelease(midiNoteToString(store.melody[store.playPosition]), "8n");
            // console.log("playing note" + store.playPosition)
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