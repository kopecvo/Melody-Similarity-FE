const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]

export function midiNoteToString(note) {
    let octave = Math.floor(note / 12) - 1;
    let noteName = notes[note % 12]

    return noteName + octave.toString()
}

export default {midiNoteToString}