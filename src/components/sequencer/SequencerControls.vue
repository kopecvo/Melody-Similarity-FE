<template>
  <div>
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
  </div>
</template>

<script setup>
    import {useStore} from "@/store/store";
    import {midiNoteToString} from "@/util/util";

    const props = defineProps({
        synth: null
    })

    const store = useStore()


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
                props.synth.triggerAttackRelease(midiNoteToString(store.melody[store.playPosition]), "8n");
            // console.log("playing note" + store.playPosition)
        } else {
            stop()
        }
    }
</script>

<style scoped>

</style>