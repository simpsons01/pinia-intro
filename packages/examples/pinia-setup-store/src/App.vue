<script>
import { computed } from "vue";
import { useStore } from "./store";
export default {
  setup() {
    const store = useStore();

    const count = computed(() => store.count);

    const doubleCount = computed(() => store.doubleCount);

    const addCountRandom = () => store.addCountRandom();

    return {
      count,
      doubleCount,
      addCountRandom,
    };
  },
};
</script>

<template>
  <div>
    <div>count: {{ count }}</div>
    <div>doubleCount: {{ doubleCount }}</div>
    <div><button @click="addCountRandom">+</button></div>
  </div>
</template>
