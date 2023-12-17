import { defineStore } from "pinia";

export const useStore = defineStore("productA", {
  state: () => ({
    products: [],
  }),
  actions: {
    getProducts() {
      this.products = [
        { name: "吹風氣", id: 1, spec: "110v" }
      ]
    },
  }
});
