import { defineStore } from "pinia";

export const useStore = defineStore("count", {
  state: () => ({
    count: 0
  }),
  actions: {
    addCount(count) {
      this.count += count;
    },
  }
});
