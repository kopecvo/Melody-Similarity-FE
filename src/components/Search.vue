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
      color="success"
      variant="tonal"
      :disabled="!uploadMidiValid || searchingMelody || searchingMidi"
      @click="uploadAndSearch"
      :loading="searchingMidi"
    >
      Search MIDI
    </v-btn>

    <v-btn
      class="item"
      color="success"
      variant="tonal"
      :disabled="sequencerStore.getMelodyNotes < store.minMelodyLengthSearch || searchingMelody || searchingMidi"
      @click="searchMelody"
      :loading="searchingMelody"
    >
      Search melody
    </v-btn>

    <v-btn
      size="small"
      icon="mdi-tune"
      class="item"
      variant="tonal"
      @click="store.showSettings = !store.showSettings"
    >
    </v-btn>

    <v-snackbar
      v-model="snackbar"
    >
      {{ snackbarText }}

      <template v-slot:actions>
        <v-btn
          color="pink"
          variant="text"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script setup>
    import {useSequencerStore} from "@/store/sequencerStore";
    import {useStore} from "@/store/store";
    import axios from "axios"
    import {onMounted, reactive, ref, watch} from "vue";
    import config from "@/config/config"

    const sequencerStore = useSequencerStore()
    const store = useStore()

    let midiFiles = reactive([])
    let uploadMidiValid = ref(false)
    let uploadMidiRules = [
        value => {
            return !value || !value.length || value[0].size < 1000000 || 'MIDI size should be less than 1 MB!'
        },
    ]

    let searchingMelody = ref(false)
    let searchingMidi = ref(false)

    let snackbar = ref(false)
    let snackbarText = ref("")

    function setFiles(e) {
        midiFiles = e.target.files
    }

    function searchMelody() {
        store.searchResults = null
        searchingMelody.value = true
        axios.post(config.API_URL + "api/search/melody/", {
            inputMelody: sequencerStore.getMelody
        }).then(response => {
            store.searchResults = response.data
        }).catch(error => {
            store.searchResults = null
            console.log(error)
        }).finally(() => {
            searchingMelody.value = false
        })
    }

    function uploadAndSearch() {
        if (midiFiles.length === 0) {
            return
        }

        store.searchResults = null
        searchingMidi.value = true
        let incomingFileName = ""
        let formData = new FormData();
        formData.append("file", midiFiles[0]);
        axios.post(config.API_URL + 'api/upload/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            incomingFileName = response.data.filename
            console.log(incomingFileName)

            axios.post(config.API_URL + 'api/search/midi/', {
                requestedMidi: incomingFileName
            }).then(response => {
                store.searchResults = response.data
            }).catch(error => {
                store.searchResults = null

                if ('error' in error.response.data) {
                    snackbarText.value = error.response.data['error']
                    snackbar.value = true
                }

            }).finally(() => {
                searchingMidi.value = false
            })
        }).catch(error => {
            store.searchResults = null
            console.log(error)
            searchingMidi.value = false
        })
    }

    const uploadMidiForm = ref(null)
</script>

<style scoped lang="sass">
.search
  margin-top: 5px
  display: flex
  flex-direction: row

.item
  margin-left: 5px
</style>