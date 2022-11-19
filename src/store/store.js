import { defineStore } from 'pinia'

export const useStore = defineStore('store', {

    state: () => ({
        // Maximum length of melody
        melodyLength: 40,
        // Inputted melody by the user
        melody: [],
        // Lowest and highest MIDI note available on the keypad
        lowestNote: 48,     // C4
        highestNote: 83,    // B6
        // Array will be used to generate notes between lowest and highest one
        notes: [],
        // Is user melody playing or not
        playing: false,
        playPosition: -1,
        synth: null
    }),
    getters: {
        getNoteAtPosition: (state) => (position) => state.melody[position]
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

        printMelody() {
            console.log(this.melody)
        }
    },
})
