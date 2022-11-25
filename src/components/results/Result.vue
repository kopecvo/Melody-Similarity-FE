<template>
  <v-card
    class="result"
  >
    <v-card-title>
      {{ props.result.title }}
    </v-card-title>
    <v-card-subtitle>
      {{ props.result.author }}
    </v-card-subtitle>

    <v-card-text>
      <v-chip
        style="margin-bottom: 10px"
        :color="'hsl(' + countPercentage(props.result.lcs, props.result.segmentMelody) + ', 100%, 45%)'"
      >
        {{ countPercentage(props.result.lcs, props.result.segmentMelody) + "% match" }}
      </v-chip>
      <p/>
      {{ "LCS length: " + props.result.lcs.length }}
      <p/>
      {{ "Segment: <" + props.result.segment[0] + ", " + props.result.segment[1] + ">" }}
      <p/>
      {{ "Segment melody: "}}
      <span
        v-for="(note, i) in props.result.segmentMelody"
      >
        <span
          v-if="props.result.truthArray[i]"
          style="color: limegreen"
        >
          {{ note + " " }}
        </span>
        <span
          v-else
        >
          {{ note + " " }}
        </span>
      </span>

      <v-btn
        style="margin-left: 5px"
        variant="plain"
        icon="mdi-play"
        size="x-small"
        @click="playSegment"
      ></v-btn>
      <p/>

    </v-card-text>
  </v-card>
</template>

<script setup>
    import {ref} from "vue";
    import {useStore} from "@/store/store";
    import {midiNoteToString} from "@/util/util";

    const store = useStore()

    const props = defineProps({
        synth: null,
        result: null
    })

    function countPercentage(lcs, melody) {
        return ((lcs.length / melody.length) * 100).toFixed(2);
    }

    let segmentPlaying = ref(false)

    function playSegment() {
        if (!segmentPlaying.value) {
            store.stopPlaying()
            console.log("started playing segment")
            store.playPosition = -1
            store.playing = true
            segmentPlaying.value = true
            store.callbackId = setInterval(playNote, 200)
        } else {
            store.stopPlaying()
            segmentPlaying.value = false
        }
    }

    function playNote() {
        if (store.playPosition < props.result.segmentMelody.length) {
            store.playPosition++
            if (props.result.segmentMelody[store.playPosition] > 0)
                props.synth.triggerAttackRelease(midiNoteToString(props.result.segmentMelody[store.playPosition]), "8n");
            // console.log("playing note" + store.playPosition)
        } else {
            store.stopPlaying()
            segmentPlaying.value = false
        }
    }


</script>

<style scoped lang="sass">
.result
  margin: 5px

.lcsMelody
  display: flex
  flex-direction: column
</style>