<template>
  <div
    class="piano"
  >
    <div
      v-for="note in store.notes"
      :class="determinePianoKey(note)"
    />
  </div>
</template>

<script setup>
import {useStore} from "@/store/store";
import {midiNoteToString} from "@/util/util";

    const store = useStore()

    function determinePianoKey(note) {
        let noteStr = midiNoteToString(note)
        if (noteStr.includes("#")) {
            return 'blackKey'
        }

        const lKeys = ["C", "E", "F", "B"]
        if (lKeys.some(el => noteStr.includes(el))) {
            return 'whiteKey L'
        }
        return 'whiteKey T'
    }
</script>

<style scoped lang="sass">
.piano
  display: flex
  justify-content: center
  flex-direction: column

.whiteKey
  height: 22px
  width: 80px
  border-left: 1px solid #bbb
  border-bottom: 1px solid #bbb
  border-radius: 0 5px 5px 0
  box-shadow: -1px 0 0 rgba(255,255,255,0.8) inset,0 0 5px #ccc inset,0 0 3px rgba(0,0,0,0.2)
  background: linear-gradient(to bottom,#eee 0%,#fff 100%)

.whiteKey:active
  border-left: 1px solid #777
  border-bottom: 1px solid #999
  border-right: 1px solid #999
  box-shadow: 2px 0 3px rgba(0,0,0,0.1) inset,-5px 5px 20px rgba(0,0,0,0.2) inset,0 0 3px rgba(0,0,0,0.2)
  background: linear-gradient(to bottom,#fff 0%,#e9e9e9 100%)

.blackKey
  height: 22px
  margin-top: -11px
  margin-bottom: -11px
  width: 50px
  box-shadow: -1px -1px 2px rgba(255,255,255,0.2) inset,0 -5px 2px 3px rgba(0,0,0,0.6) inset,0 2px 4px rgba(0,0,0,0.5)
  background: linear-gradient(45deg,#222 0%,#555 100%)
  z-index: 1

.T
  height: 44px

.L
  height: 33px

</style>