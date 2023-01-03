# MIDI melody similarity frontend

Melody similarity search web app, built with Vue.js and Vuetify

![](https://raw.githubusercontent.com/kopecvo/Melody-Similarity-BE/master/report/images/interface.png)

## Features

* Input melody using a sequencer
* Sequencer is fully reactive and customizable (range of notes, max length)
* Play/pause inputted melody, clear melody
* MIDI file import which extracts melody from MIDI files
* Search your melody in musical pieces in database (~295 pieces from [piano-midi.de](http://www.piano-midi.de/))
* Different search functions available ([LCS](https://en.wikipedia.org/wiki/Longest_common_subsequence) - Longest Common Subsequence, [DTW](https://en.wikipedia.org/wiki/Dynamic_time_warping) - Dynamic Time Warping)
* For DTW, a graph of mapping of the two sequences is also shown in the results

## Technology used
* [Vue.js 3](https://vuejs.org/), [Vuetify 3.0.1](https://next.vuetifyjs.com/en/)
* [Pinia](https://pinia.vuejs.org/) for global state management
* [Tone.js](https://tonejs.github.io/) for playing music in browser

## Project setup

Node >= 16.0 required

```
# yarn
yarn

# npm
npm install
```

### Compiles and hot-reloads for development

```
# yarn
yarn dev

# npm
npm run dev
```
