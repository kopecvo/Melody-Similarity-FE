<template>
  <div>
    <v-btn
      variant="outlined"
      icon
      size="large"
      @click="play()"
    >
      <v-icon
        v-if="sequencerStore.playing"
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

    <v-btn
      variant="tonal"
      size="small"
      @click="store.showSettings = !store.showSettings"
    >
      Settings
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

    let callbackId = null

    function play() {
        if (!sequencerStore.playing) {
            console.log("started playing")
            sequencerStore.playPosition = -1
            sequencerStore.playing = true
            callbackId = setInterval(playNote, 200)
        } else {
            stop()
        }
    }

    function stop() {
        console.log("finished playing")
        clearInterval(callbackId)
        sequencerStore.playing = false
        sequencerStore.playPosition = -1
    }

    function playNote() {
        if (sequencerStore.playPosition < sequencerStore.melodyLength) {
            sequencerStore.playPosition++
            if (sequencerStore.melody[sequencerStore.playPosition] > 0)
                props.synth.triggerAttackRelease(midiNoteToString(sequencerStore.melody[sequencerStore.playPosition]), "8n");
            // console.log("playing note" + store.playPosition)
        } else {
            stop()
        }
    }
</script>

<style scoped>

</style>