<script>
import { computed } from "vue";
import { useStore } from "./store";
export default {
  setup() {
    const store = useStore();

    const count = computed(() => store.count);

    const addCountByOne = () => {
      try {
        store.setCount(count.value + 1);
      } catch (error) {
        // silent error
      }
    };

    const addPluginCountByOne = () => {
      store.addPluginCountByOne();
    };

    const pluginCount = computed(() => store.pluginCount);

    return {
      pluginCount,
      count,
      addCountByOne,
      addPluginCountByOne,
    };
  },
};
</script>

<template>
  <div>
    <div>count: {{ count }}</div>
    <div><button @click="addCountByOne">+</button></div>
  </div>
  <div>
    <div>pluginCount: {{ pluginCount }}</div>
    <div><button @click="addPluginCountByOne">+</button></div>
  </div>
</template>
