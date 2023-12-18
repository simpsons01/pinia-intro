<h1>常用API - storeToRefs</h1>
<hr>
<div class="mt-2 mb-1">
  <a  href="http://localhost:6066" target="_blank">範例</a>
</div>
```js {monaco}
import { useStore } from "./store";
import { storeToRefs  } from "pinia"

const store = useStore();
// ❌ lose reactivity
const { count } = store
// ✅ reactivity still connect
const { count } = storeToRefs(store)
```