<template>
  <div>
    <div>count: {{ count }}</div>
    <div><button @click="addCountByAction">addCountByAction</button></div>
    <div><button @click="addCountByDispatch">addCountByDispatch</button></div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState({
      count: state => state.count
    })
  },
  methods: {
   ...mapActions(["addCount"]),
   addCountByAction() {
     this.addCount(1)
   },
   addCountByDispatch() {
     this.$store.dispatch("addCount", 1)
   }
  }
};
</script>


