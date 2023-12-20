<h1>與Vuex的差異 - 如何定義一個store(1)</h1>
<hr>
```ts
type StoreOption = {
  state: () => { [key: string]: any },
  actions: { [key: string]: (...args: any[]) => any }
}

// id must be unique
type defineStore = (id: string, options: StoreOption) => () => Store
```

```js
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