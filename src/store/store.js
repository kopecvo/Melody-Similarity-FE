import { defineStore } from 'pinia'

// Global state for general app variables
export const useStore = defineStore('store', {

    state: () => ({
        showSettings: false,

        // Minimum amount of notes inputted by user to be allowed to search the melody
        minMelodyLengthSearch: 3,

        // Search results will be saved here after search
        searchResults: null,

        // Chosen search function in settings
        chosenSearchFn: "lcs",
        // Number of results returned
        numOfResults: 5,

        // -- Music player --
        // Is music player playing?
        playing: false,
        // ID of callback func responsible for playing
        callbackId: null,
        // Is sequencer playing? (Otherwise, segment in a result might be playing)
        sequencerPlaying: false,
        playPosition: -1,
    }),
    getters: {
    },
    actions: {
        stopPlaying() {
            console.log("Stopping playback")
            this.playing = false
            this.sequencerPlaying = false
            this.playPosition = -1
            clearInterval(this.callbackId)
        }
    },
})
