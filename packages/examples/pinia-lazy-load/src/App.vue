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

<template>
  <div>
    <div>storeRegisterKey: {{ storeRegisterKey }}</div>
    <router-view />
  </div>
</template>
