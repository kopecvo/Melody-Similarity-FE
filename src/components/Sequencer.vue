<template>
  <SequencerControls
    :synth="props.synth"
  />
  <div
    class="sequencer"
  >
    <PianoColumn />
    <NoteColumn
      v-for="(note, i) in store.melodyLength"
      :position-in-melody=i
      :synth="props.synth"
    />
  </div>
</template>

<script setup>
    import PianoColumn from '@/components/PianoColumn'
    import NoteColumn from '@/components/NoteColumn'
    import {useStore} from "@/store/store";
    import SequencerControls from "@/components/SequencerControls";

    const props = defineProps({
        synth: null
    })

    const store = useStore()
</script>

<style scoped lang="sass">
.sequencer
  display: flex
  flex-direction: row
</style>
