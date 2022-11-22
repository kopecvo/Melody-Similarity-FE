import { defineStore } from 'pinia'

// Global state for general app variables
export const useStore = defineStore('store', {

    state: () => ({
        showSettings: false,

        // Minimum amount of notes inputted by user to be allowed to search the melody
        minMelodyLengthSearch: 3,

        searchResults: null
    }),
    getters: {
    },
    actions: {
    },
})
