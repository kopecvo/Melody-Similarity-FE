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
import {onBeforeMount, reactive, ref} from "vue";
import {useStore} from "@/store/store";

    const store = useStore()

    const props = defineProps({
        positionInMelody: Number
    })

    function determineColor(note) {
        if (note === store.getNoteAtPosition(props.positionInMelody)) {
            return 'noteBoxSelected'
        }
        if (note % 2 === 0) {
            return 'noteBoxLight'
        }
        return 'noteBoxDark'
    }

    function selectNote(note) {
        // If clicking the same note, deselect it instead
        if (note === store.getNoteAtPosition(props.positionInMelody)) {
            store.changeNoteAtPosition(props.positionInMelody, 0)
        } else {
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
  transition: background-color 0.2s

.noteBox:hover
  background-color: #3e6364

.noteBoxLight
  background-color: #34444e

.noteBoxDark
  background-color: #2e3e48

.noteBoxSelected
  background-color: #59c277

</style>
