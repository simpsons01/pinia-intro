<h1>常用API - getters/mapState/mapActions</h1>
<hr>
<div class="mt-2 mb-1">
  <a  href="http://localhost:6061" target="_blank">範例</a>
</div>
```js
import { mapState, mapActions } from "pinia"
import { useStore } from "./store"

export default {
  computed: {
    ...mapState(useStore, {
      count: state => state.count,
      doubleCount: state => state.count
    })
  },
  methods: {
   ...mapActions(useStore, ["addCountByOne"])
  }
};
```
