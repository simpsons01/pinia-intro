<script>
import { useStore } from "./store";
import { storeToRefs  } from "pinia"
export default {
  setup() {
    const store = useStore();
    // ❌
    const { count: countValueByDirectlyDestructure } = store
    // ✅
    const { count: countValueByPiniaStoreToRefs } = storeToRefs(store)

    const addCountByOne = () => store.addCountByOne();

    return {
      countValueByDirectlyDestructure,
      countValueByPiniaStoreToRefs,
      countValueByVueToRefs,
      addCountByOne,
    };
  },
};
</script>

<template>
  <div>
    <div>countValueByDirectlyDestructure: {{ countValueByDirectlyDestructure }}</div>
    <div>countValueByPiniaStoreToRefs: {{ countValueByPiniaStoreToRefs }}</div>
    <div><button @click="addCountByOne">+</button></div>
  </div>
</template>
