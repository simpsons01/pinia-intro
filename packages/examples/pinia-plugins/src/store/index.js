import { defineStore } from "pinia";

export const useStore = defineStore("count", {
  state: () => ({
    count: 0,
  }),
  actions: {
    addCountByOne() {
      if (this.count > 5) {
        throw new Error("count is bigger than five");
      }
      this.count += 1;
    },
  },
  useErrorLog: false,
  useOnAction: true,
  useSubScribe: true,
});
