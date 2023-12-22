import { defineStore } from "pinia";

export const useStore = defineStore("user", {
  state: () => ({
    name: 'ray.zhu',
    gender: "male"
  }),
  actions: {
    a() {
      console.log("temp")
    }
  }
});