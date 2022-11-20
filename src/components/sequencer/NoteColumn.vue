<template>
  <div>
    <div
      v-for="note in store.notes"
      class="noteBox"
      :class="determineColor(note)"
      @click="selectNote(note)"
    />
  </div>
</template>

<script setup>
import {useStore} from "@/store/store";
import {midiNoteToString} from "@/util/util";

    const store = useStore()

    const props = defineProps({
        positionInMelody: Number,
        synth: null
    })

    function determineColor(note) {
        if (note === store.getNoteAtPosition(props.positionInMelody)) {
            if (store.playPosition === props.positionInMelody)
                return 'noteBoxSelectedPlaying playing'
            return 'noteBoxSelected'
        }
        if (note % 2 === 0) {
            if (store.playPosition === props.positionInMelody)
                return 'noteBoxLightPlaying playing'
            return 'noteBoxLight'
        }
        if (store.playPosition === props.positionInMelody)
            return 'noteBoxDarkPlaying playing'
        return 'noteBoxDark'
    }

    function selectNote(note) {
        // If clicking the same note, deselect it instead
        if (note === store.getNoteAtPosition(props.positionInMelody)) {
            store.changeNoteAtPosition(props.positionInMelody, 0)
        } else {
            // play note
            props.synth.triggerAttackRelease(midiNoteToString(note), "8n");
            store.changeNoteAtPosition(props.positionInMelody, note)
        }
    }

</script>

<style scoped lang="sass">
.noteBox
  height: 22px
  width: 40px
  border-left: 1px solid #24343e
  border-top: 1px solid #24343e
  //transition: background-color 0.2s

.noteBox:hover
  background-color: #3e6364

.noteBoxLight
  background-color: #34444e

.noteBoxDark
  background-color: #2e3e48

.noteBoxLightPlaying
  background-color: #3a656e

.noteBoxDarkPlaying
  background-color: #3a656e

.noteBoxSelected
  background-color: #59c277

.noteBoxSelectedPlaying
  background-color: #dcea18

.noteBoxSelected:hover
  background-color: #59c277

.playing
  border-left: none
  border-top: none
</style>
