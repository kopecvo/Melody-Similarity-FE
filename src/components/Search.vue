<template>
  <div
    class="search"
  >
    <div
      style="width: 250px"
    >
      <v-form
        ref="uploadMidiForm"
        v-model="uploadMidiValid"
      >
        <v-file-input
          @change="setFiles"
          :rules="uploadMidiRules"
          accept=".mid"
          label="Choose a MIDI file"
          density="compact"
          required
        />
      </v-form>

    </div>
    <v-btn
      class="item"
      size="large"
      color="success"
      variant="tonal"
      :disabled="sequencerStore.getMelodyNotes < store.minMelodyLengthSearch"
      @click="search"
    >
      Search
    </v-btn>

    <v-btn
      class="item"
      size="large"
      color="success"
      variant="tonal"
      :disabled="!uploadMidiValid"
      @click="upload"
    >
      Search MIDI
    </v-btn>
  </div>
</template>

<script setup>
    import {useSequencerStore} from "@/store/sequencerStore";
    import {useStore} from "@/store/store";
    import axios from "axios"
    import {reactive, ref, watch} from "vue";

    const sequencerStore = useSequencerStore()
    const store = useStore()

    let midiFiles = reactive([])
    let uploadMidiValid = ref(false)
    let uploadMidiRules = [
        value => {
            return !value || !value.length || value[0].size < 1000000 || 'MIDI size should be less than 1 MB!'
        },
    ]

    function setFiles(e) {
        midiFiles = e.target.files
        console.log("setting files")
    }

    function search() {
        axios.post('http://127.0.0.1:8000/api/', {
            inputMelody: sequencerStore.getMelody
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function upload() {
        let formData = new FormData();
        formData.append("file", midiFiles[0]);
        axios.post('http://127.0.0.1:8000/api/upload/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => console.log(response)).catch(error => console.log(error))
    }

</script>

<style scoped lang="sass">
.search
  display: flex
  flex-direction: row

.item
  margin-left: 5px
</style>