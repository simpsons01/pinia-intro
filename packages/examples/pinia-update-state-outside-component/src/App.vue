<script>
import { computed } from "vue";
import { useStore } from "./store";
export default {
  setup() {
    const store = useStore();

    const count = computed(() => store.count);
  
    return {
      count
    };
  },
};
</script>

<template>
  <div>
    <div>count: {{ count }}</div>
  </div>
</template>
