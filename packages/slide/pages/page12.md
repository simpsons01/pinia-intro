<h1>與Vuex的差異 - 使用其他store</h1>
<hr>
<div class="flex h-full">
  <div class="p-1 flex-1">
    <h3>Pinia</h3>
    <ul class="flex-initial">
       <li>
          <a 
            target="_blank" 
            href="????????"
          >
            範例
          </a>
       </li>
    </ul>
```js {monaco}
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
        console.log("user gender is male")
      }else if(userStore.gender === "female") {
        console.log("user gender is female")
      }
      this.todos = [...this.todos, todo]
    }
  }
});
```
  </div>
  <div class="h-full w-[1px] bg-gray-2 gray-100 m-2 bg-black"></div>
  <div class="p-1 flex-1">
    <h3>Vuex</h3>
    <ul class="flex-initial">
      <li>
          <a 
            target="_blank" 
            href="????????"
          >
            範例
          </a>
      </li>
    </ul>
```js {monaco}
export default {
  namespaced: true,
  state() {
    return {
      todos: [{ content: '吃飯', id: 1 }]
    }
  },
  actions: {
    insertTodo({ commit, rootState }, todo) {
      if(rootState.user.gender == "male") {
        console.log("user gender is male")
      }else if(rootState.user.gender == "female") {
        console.log("user gender is female")
      }
      commit('updateTodos', todo)
    }
  },
}
```
  </div>
</div>
