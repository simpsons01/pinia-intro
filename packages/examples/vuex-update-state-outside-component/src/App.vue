<template>
  <div>
    <div>count: {{ count }}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState({
      count: state => state.count
    })
  }
};
</script>


