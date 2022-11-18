<template>
  <v-layout>
    <v-main>
      <div
        class="keypad"
      >
        <NoteColumn />
        <NoteColumn />
        <NoteColumn />
        <NoteColumn />
        <NoteColumn />
        <NoteColumn />
        <NoteColumn />
        <NoteColumn />
        <NoteColumn />
        <NoteColumn />
        <NoteColumn />
        <NoteColumn />
        <NoteColumn />
        <NoteColumn />
        <NoteColumn />
        <NoteColumn />
      </div>
    </v-main>
  </v-layout>
</template>

<script setup>
    import NoteColumn from '@/components/NoteColumn'
    import { useStore } from '@/store/store'

    const store = useStore()
</script>

<style scoped lang="sass">
.keypad
  display: flex
  flex-direction: row
</style>
