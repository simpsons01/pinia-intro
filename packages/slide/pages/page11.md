<h1>與Vuex的差異 - 元件外更新資料的方式</h1>
<hr>
<div class="flex h-full">
  <div class="p-1 flex-1">
    <h3>Pinia</h3>
    <ul class="flex-initial">
       <li>
        <a 
          target="_blank" 
          href="http://localhost:6069"
        >
          範例
        </a>
       </li>
    </ul>
```js
import { useStore } from "./store"

const store = useStore();

store.addCountByOne();

store.$patch({ count: store.count + 1 });

store.$patch(state => state.count = store.count + 1);
```
  </div>
  <div class="h-full w-[1px] bg-gray-2 gray-100 m-2 bg-black"></div>
  <div class="p-1 flex-1">
    <h3>Vuex</h3>
        <ul class="flex-initial">
        <li>
          <a 
            target="_blank" 
            href="http://localhost:6075"
          >
            範例
          </a>
       </li>
    </ul>
```js
import store from "./store"

store.dispatch("addCount", store.state.count + 1)
```
  </div>
</div>