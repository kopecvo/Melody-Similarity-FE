<template>
  <div>
    <SequencerControls
      :synth="props.synth"
    />
    <div
      class="sequencer"
    >
      <PianoColumn />
      <NoteColumn
        v-for="(note, i) in sequencerStore.melodyLength"
        :position-in-melody=i
        :synth="props.synth"
      />
    </div>
  </div>
</template>

<script setup>
    import PianoColumn from '@/components/sequencer/PianoColumn'
    import NoteColumn from '@/components/sequencer/NoteColumn'
    import {useSequencerStore} from "@/store/sequencerStore";
    import SequencerControls from "@/components/sequencer/SequencerControls";

    const props = defineProps({
        synth: null
    })

    const sequencerStore = useSequencerStore()
</script>

<style scoped lang="sass">
.sequencer
  display: flex
  flex-direction: row
  overflow-x: auto
</style>
