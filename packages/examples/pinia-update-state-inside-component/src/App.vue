<script>
import { computed } from "vue";
import { useStore } from "./store";
export default {
  setup() {
    const store = useStore();

    const count = computed(() => store.count);
    
    const addCountByAction = () => store.addCount(count.value + 1);

    const addCountByPatch = () => store.$patch({ count: count.value + 1 });

    const addCountByPatchCallBack = () => store.$patch(state => state.count = count.value + 1);

    const addCountByDirectlyAssignValue = () => store.count = count.value + 1;

    return {
      count,
      addCountByAction,
      addCountByPatch,
      addCountByPatchCallBack,
      addCountByDirectlyAssignValue
    };
  },
};
</script>

<template>
  <div>
    <div>count: {{ count }}</div>
    <div><button @click="addCountByAction">addCountByAction</button></div>
    <div><button @click="addCountByPatch">addCountByPatch</button></div>
    <div><button @click="addCountByPatchCallBack">addCountByPatchCallBack</button></div>
    <div><button @click="addCountByDirectlyAssignValue">addCountByDirectlyAssignValue</button></div>
  </div>
</template>
