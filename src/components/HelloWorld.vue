<template>
  <v-layout>
    <v-app-bar color="grey-lighten-2"></v-app-bar>
    <v-main>
      <v-card>
        <v-card-title>
          {{ store.count }}
        </v-card-title>
      </v-card>
    </v-main>
  </v-layout>
</template>

<script setup>
    import { useStore } from '@/store/store'

    const store = useStore()
</script>
