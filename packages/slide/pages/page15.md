<h1>如何撰寫測試</h1>
<hr>
<div class="mt-2">
  <a  href="http://localhost:6067" target="_blank">範例</a>
</div>
```js {monaco}
import { describe, beforeEach, it, expect } from "vitest"
import { setActivePinia, createPinia } from 'pinia'
import { useStore } from './store'

describe('store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('increments', () => {
    const store = useStore()
    expect(store.count).toBe(0)
    store.addCountByOne()
    expect(store.count).toBe(1)
  })
})
```