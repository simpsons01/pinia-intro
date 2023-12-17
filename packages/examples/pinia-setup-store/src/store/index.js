import { computed, inject, watch } from "vue"
import { defineStore } from "pinia";
import useLocalStorage from "../composable/useLocalStorage"

export const useStore = defineStore("count", () => {
  
  const isTodayDateEven =  inject("isTodayDateEven")

  const { val: count, updateVal } = useLocalStorage("count", 0)

  const addCountRandom = () => {
    if(isTodayDateEven) {
      updateVal(count.value + 2)
    }else {
      updateVal(count.value + 1)
    }
  }

  watch(count, (oldVal, newVal) => {
    console.log(`count is updated, newVal is ${newVal} and oldVal is ${oldVal}`)
  })
  
  const doubleCount = computed(() => count.value * 2)

  return {
    count,
    doubleCount,
    addCountRandom
  }
});
