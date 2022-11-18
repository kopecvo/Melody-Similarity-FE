<template>
  <div>
    <div
      v-for="(note, i) in notes"
      class="noteBox"
      :class="determineColor(note)"
    />
  </div>
</template>

<script setup>
    import {onBeforeMount} from "vue";

    let notes = []

    function determineColor(note) {
        if (note % 2 === 0) {
            return 'noteBoxLight'
        }
        return 'noteBoxDark'
    }

    onBeforeMount(() => {
        for (let i = 48; i < 84; ++i) {
            notes.push(i)
        }
    })
</script>

<style scoped lang="sass">
.noteBox
  height: 22px
  width: 32px
  border-left: 1px solid #24343e
  border-top: 1px solid #24343e

.noteBoxLight
  background-color: #34444e

.noteBoxDark
  background-color: #2e3e48

</style>
