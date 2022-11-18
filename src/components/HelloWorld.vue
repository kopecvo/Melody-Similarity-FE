<template>
  <v-layout>
    <v-app-bar color="grey-lighten-2"></v-app-bar>
    <v-main>
      <NoteColumn />
      <v-card>
        <v-card-title>
          {{ store.count }}
        </v-card-title>
      </v-card>
    </v-main>
  </v-layout>
</template>

<script setup>
    import NoteColumn from '@/components/NoteColumn'
    import { useStore } from '@/store/store'

    const store = useStore()
</script>
