<h1>與Vuex的差異 - 如何定義一個store</h1>
<hr>
<div class="flex h-full">
  <div class="p-1 flex-1 flex flex-col">
   <h3 class="flex-0 flex-initial">Pinia</h3>
   <ul class="flex-initial">
      <li>
        <a 
          target="_blank" 
          href="http://localhost:6060"
        >
          store example
        </a>
      </li>
      <li>
        <a 
          target="_blank" 
          href="http://localhost:6063"
        >
          nested store example
        </a>
      </li>
    </ul>
```js {monaco}
import { defineStore } from "pinia";

export const useStore = defineStore("count", {
  state: () => ({
    count: 0,
  }),
  actions: {
    addCountByOne() {
      this.count += 1;
    },
  }
});
```
  </div>
  <div class="h-full w-[1px] bg-gray-2 gray-100 m-2 bg-black"></div>
  <div class="p-1 flex-1 flex flex-col">
    <h3 class="flex-initial">
      Vuex
    </h3>
    <ul class="flex-initial">
       <li>
        <a 
          target="_blank" 
          href="http://localhost:6071"
        >
          store example
        </a>
       </li>
       <li>
        <a 
          target="_blank" 
          href="http://localhost:6073"
        >
          nested store example
        </a>
       </li>
    </ul>
```js {monaco}
import { createStore  } from "vuex";

export default createStore({
  state: {
    count: 0
  },
  actions: {
    addCountByOne({ commit, state }) {
      commit('updateCount', state.count + 1)
    }
  },
  mutations: {
    updateCount(state, count) {
      state.count = count
    }
  }
})
```
  </div>
</div>