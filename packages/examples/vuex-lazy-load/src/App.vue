<template>
  <div>
    <div>storeRegisterKey: {{ storeRegisterKey }}</div>
    <router-view />
  </div>
</template>


<script>
import { inject } from "vue"
export default {
  setup() {
    return {
      storeRegisterKey: inject('storeRegisterKey')
    };
  },
};
</script>
