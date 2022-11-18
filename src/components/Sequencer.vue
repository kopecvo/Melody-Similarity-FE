<template>
  <div
    class="sequencer"
  >
    <NoteColumn
      v-for="(note, i) in store.melodyLength"
      :position-in-melody=i
    />
  </div>
</template>

<script setup>
    import NoteColumn from '@/components/NoteColumn'
    import {useStore} from "@/store/store";

    const store = useStore()
</script>

<style scoped lang="sass">
.sequencer
  display: flex
  flex-direction: row
</style>
