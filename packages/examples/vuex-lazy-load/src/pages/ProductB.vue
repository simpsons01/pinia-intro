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

<script>
import { mapState } from "vuex";

export default {
  name: "ProductB",
  computed: {
    ...mapState('productB', {
      products: state => state.products
    })
  }
};
</script>
