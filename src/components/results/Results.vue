<template>
  <div
    class="results"
  >
    <Result
      v-for="result in results"
      :result="result"
    />
  </div>
</template>

<script setup>
    import Result from '@/components/results/Result'
    import {useStore} from "@/store/store";
    import {computed, watch} from "vue";

    const store = useStore()

    const results = computed(() => {
        if (store.searchResults === null) {
            return []
        }
        return [store.searchResults]
    })

</script>

<style scoped lang="sass">
.results
  display: flex
  flex-direction: row

</style>