<script>
import { computed } from "vue";
import { useStore } from "../store/productB";
export default {
  setup() {
    const store = useStore();

    const products = computed(() => store.products);

    return {
      products
    };
  },
};
</script>

<template>
  <div>
    <div><router-link to="/">back to home</router-link></div>
    <h1>productB</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        <p>name: {{ product.name }}</p>
        <p>type: {{ product.type }}</p>
      </li>
    </ul>
  </div>
</template>