<h1>與Vuex的差異 - 動態載入模組</h1>
<hr>
<div class="flex h-full">
  <div class="p-1 flex-1">
    <h3>Pinia</h3>
    <ul class="flex-initial">
       <li>
        <a 
          target="_blank" 
          href="http://localhost:6062"
        >
          範例
        </a>
       </li>
    </ul>
```js {monaco}
import { useStore } from "./store"

const store = useStore()
```
</div>
<div class="h-full w-[1px] bg-gray-2 gray-100 m-2 bg-black"></div>
  <div class="p-1 flex-1">
    <h3>Vuex</h3>
    <ul class="flex-initial">
      <li>
          <a 
            target="_blank" 
            href="http://localhost:6072"
          >
            範例
          </a>
      </li>
    </ul>
```js {monaco}
import store from "./store"
import myModule from "./store/myModule"

store.registerModule('myModule', myModule)
```
  </div>
</div>
