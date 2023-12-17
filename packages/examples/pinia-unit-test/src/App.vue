<script>
import { computed } from "vue";
import { useStore } from "./store";
export default {
  setup() {
    const store = useStore();

    const count = computed(() => store.count);

    const addCountByOne = () => store.addCountByOne();

    return {
      count,
      addCountByOne,
    };
  },
};
</script>

<template>
  <div>
    <div>count: {{ count }}</div>
    <div><button @click="addCountByOne">+</button></div>
  </div>
</template>
