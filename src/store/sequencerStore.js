import { defineStore } from 'pinia'

// Global state for the sequencer
export const useSequencerStore = defineStore('sequencerStore', {

    state: () => ({
        // Maximum length of melody
        melodyLength: 40,
        // Inputted melody by the user
        melody: [],
        // Lowest and highest MIDI note available on the keypad
        lowestNote: 60,     // C4
        highestNote: 83,    // B5
        // Array will be used to generate notes between lowest and highest one
        notes: [],
    }),
    getters: {
        getNoteAtPosition: (state) => (position) => state.melody[position],
        // Get amount of valid notes in melody
        getMelodyNotes: (state) => state.melody.filter(note => note > 0).length,
        // Get final melody to be searched
        getMelody: (state) => state.melody.filter(note => note > 0)
    },
    actions: {
        // Initialize melody input and range of notes available
        initMelody() {
            for (let i = this.lowestNote; i <= this.highestNote; ++i) {
                this.notes.push(i)
            }
            this.notes.reverse()

            for (let i = 0; i < this.melodyLength; ++i) {
                // Push note outside of range => deselected note
                this.melody.push(0)
            }
        },

        changeNoteAtPosition(position, note) {
            this.melody[position] = note
        },

        // Deselect all notes
        resetMelody() {
            for (let i = 0; i < this.melodyLength; ++i) {
                this.melody[i] = 0
            }
        },
    },
})
