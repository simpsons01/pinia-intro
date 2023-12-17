import { defineStore } from "pinia";

export const useStore = defineStore("productB", {
  state: () => ({
    products: [],
  }),
  actions: {
    getProducts() {
      this.products = [
        { name: "air pods pro", id: 1, type: "wireless" }
      ]
    },
  }
});
