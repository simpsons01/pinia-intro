import { computed, inject, watch, ref } from "vue"
import { defineStore } from "pinia";

export const useStore = defineStore("count", () => {

  const isTodayDateEven =  inject("isTodayDateEven")

  const count = ref(0)

  const addCountRandom = () => {
    if(isTodayDateEven) {
      count.value = count.value + 2
    }else {
      count.value = count.value + 1
    }
  }

  const doubleCount = computed(() => count.value * 2)

  watch(count, (oldVal, newVal) => {
    console.log(`count is updated, newVal is ${newVal} and oldVal is ${oldVal}`)
  })


  return {
    count,
    doubleCount,
    addCountRandom
  }
});
