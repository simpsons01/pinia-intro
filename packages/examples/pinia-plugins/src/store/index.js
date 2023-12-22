import { defineStore } from "pinia";

export const useStore = defineStore("count", {
  state: () => ({
    count: 0,
  }),
  actions: {
    setCount(count) {
      if (this.count > 3) {
        throw new Error("count is bigger than five");
      }
      this.count = count;
      return this.count
    },
  },
  useErrorLog: false,
  useOnAction: true,
  useSubScribe: true,
});
