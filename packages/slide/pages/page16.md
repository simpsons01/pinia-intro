<h1>其他(少用)API - pinia plugin(1)</h1>
<hr>
<div class="mt-2">
  <a  href="http://localhost:6064" target="_blank">範例</a>
</div>
```js
import { createPinia } from "pinia";

export const customPlugin = ({ pinia, app, store, options }) => {
  // pinia     pinia instance that has been created
  // app       vue instance that use pinia
  // store     store instance that has been created
  // options   store options passed to 'defineStore'
};

const pinia = createPinia()

pinia.use(customPlugin)
```