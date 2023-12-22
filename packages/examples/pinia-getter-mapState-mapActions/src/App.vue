<template>
  <div>
    <div>count: {{ count }}</div>
    <div>double count: {{ doubleCount }}</div>
    <div><button @click="addCountByOne">+</button></div>
  </div>
</template>

<script> 
import { useStore } from "./store"
import { mapState, mapActions } from "pinia";

export default {
  name: "App",
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
</script>


