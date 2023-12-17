
import { defineStore } from "pinia";

export const useStore = defineStore("user.todos", {
  state: () => ({
    todos: [{ content: '吃飯', id: 1 }]
  })
});