
import { defineStore } from "pinia";
import { useStore as useUserStore } from "./user"

export const useStore = defineStore("user.todos", {
  state: () => ({
    todos: [{ content: '吃飯', id: 1 }]
  }),
  actions: {
    insertTodo(todo) {
      const userStore = useUserStore()
      if(userStore.gender === "male") {
        console.log("do something when user gender is male")
      }else if(userStore.gender === "female") {
        console.log("do something when user gender is female")
      }
      this.todos = [
        ...this.todos,
        todo
      ]
    }
  }
});