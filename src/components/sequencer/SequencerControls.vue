<template>
  <div>
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
      @click="sequencerStore.resetMelody()"
    >
      <v-icon>mdi-trash-can-outline</v-icon>
    </v-btn>
  </div>
</template>

<script setup>
    import {useSequencerStore} from "@/store/sequencerStore";
    import {midiNoteToString} from "@/util/util";
    import {useStore} from "@/store/store";

    const props = defineProps({
        synth: null
    })

    const sequencerStore = useSequencerStore()
    const store = useStore()

    function play() {
        if (!store.playing) {
            console.log("started playing")
            store.playPosition = -1
            store.playing = true
            store.sequencerPlaying = true
            store.callbackId = setInterval(playNote, 200)
        } else {
            stop()
        }
    }

    function stop() {
        store.stopPlaying()
    }

    function playNote() {
        if (store.playPosition < sequencerStore.melodyLength) {
            store.playPosition++
            if (sequencerStore.melody[store.playPosition] > 0)
                props.synth.triggerAttackRelease(midiNoteToString(sequencerStore.melody[store.playPosition]), "8n");
            // console.log("playing note" + store.playPosition)
        } else {
            stop()
        }
    }
</script>

<style scoped>

</style>