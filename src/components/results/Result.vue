<template>
  <v-card
    class="result"
  >
    <v-card-title>
      {{ props.result.bestResultTitle }}
    </v-card-title>
    <v-card-subtitle>
      {{ props.result.author }}
    </v-card-subtitle>
    <v-card-text>
      {{ "Longest subsequence: " + props.result.longestSubsequence }}
    </v-card-text>
  </v-card>
</template>

<script setup>
    const props = defineProps({
        result: null
    })
</script>

<style scoped lang="sass">
.result
  margin: 5px
</style>