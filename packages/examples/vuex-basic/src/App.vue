<template>
  <div>
    <div>count: {{ count }}</div>
    <div><button @click="addCountByOne">+</button></div>
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
   ...mapActions("addCountByOne")
  }
};
</script>


