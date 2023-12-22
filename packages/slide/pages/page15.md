<h1>常用API - storeToRefs</h1>
<hr>
<div class="mt-2 mb-1">
  <a class="mr-1"  href="http://localhost:6066" target="_blank">範例</a>
  <a  href="https://vuejs.org/guide/essentials/reactivity-fundamentals.html#limitations-of-reactive" target="_blank">vue文件解釋</a>
</div>
```js
import { useStore } from "./store";
import { storeToRefs  } from "pinia"

const store = useStore();
// ❌ lose reactivity
const { count } = store
// ✅ reactivity still connect
const { count } = storeToRefs(store)
```