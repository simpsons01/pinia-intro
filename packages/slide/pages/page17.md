<h1>其他(少用)API - setup store</h1>
<hr>
<div class="mt-2">
  <a  href="???" target="_blank">範例</a>
</div>
```js {monaco}
import { computed, ref } from "vue
import { defineStore } from "pinia";

export const useStore = defineStore("count", () => {

  const count = ref(1)
  
  const addCountByOne = () => count.value += 1

  const doubleCount = computed(() => count.value * 2)

  return {
    count,
    doubleCount,
    addCountByOne
  }
});
```