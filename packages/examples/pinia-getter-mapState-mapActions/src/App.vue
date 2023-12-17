<template>
  <div>
    <div>count: {{ count }}</div>
    <div>double count: {{ doubleCount }}</div>
    <div><button @click="addCountByOne">+</button></div>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";

export default {
  name: "App",
  computed: {
    ...mapState({
      count: state => state.count,
      doubleCount: state => state.count
    })
  },
  methods: {
   ...mapActions("addCountByOne")
  }
};
</script>


