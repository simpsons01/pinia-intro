
import { defineStore } from "pinia";
import { useStore as useUserStore } from "./user"

export const useStore = defineStore("user.todos", {
  state: () => ({
    todos: [{ content: '吃飯', id: 1 }]
  }),
  actions: {
    async insertTodo(todo) {
      await Promise.resolve(1)
      this.todos = [
        ...this.todos,
        todo
      ]
      const userStore = useUserStore()
      userStore.a()
      if(userStore.gender === "male") {
        console.log("do something when user gender is male")
      }else if(userStore.gender === "female") {
        console.log("do something when user gender is female")
      }
    }
  }
});