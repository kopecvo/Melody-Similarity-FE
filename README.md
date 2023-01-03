# MIDI melody similarity frontend

Melody similarity search web app, built with Vue3 and Vuetify

![](https://raw.githubusercontent.com/kopecvo/Melody-Similarity-BE/master/report/images/interface.png)

## Features

* Input melody using a sequencer
* Sequencer is fully reactive and customizable (range of notes, max length)
* Play/pause inputted melody, clear melody
* MIDI file import which extracts melody from MIDI files
* Search your melody in musical pieces in database (~295 pieces from [piano-midi.de](http://www.piano-midi.de/))
* Different search functions available (**LCS** - Longest Common Subsequence, **DTW** - Dynamic Time Warping)
* For DTW, a graph of mapping of the two sequences is also shown in the results

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
