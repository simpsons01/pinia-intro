<h1>其他(少用)API - pinia plugin</h1>
<hr>
<div class="mt-2">
  <a  href="???" target="_blank">範例</a>
</div>
```js {monaco}
import { createPinia } from "pinia";

export const customPlugin = ({ pinia, app, store, options }) => {
  // pinia     正在使用的pinia instance
  // app       正在使用的vue app instance
  // store     被創建的store
  // options   store裡帶的選項
};

const pinia = createPinia()

pinia.use(customPlugin)
```