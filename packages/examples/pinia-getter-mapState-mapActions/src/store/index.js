import { defineStore } from "pinia";

export const useStore = defineStore("count", {
  state: () => ({
    count: 0,
  }),
  actions: {
    addCountByOne() {
      this.count += 1;
    },
  },
  getters: {
    doubleCount: state => state.count * 2
  }
});
