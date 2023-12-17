<template>
  <div>
    <div><router-link to="/">back to home</router-link></div>
    <h1>productA</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        <p>name: {{ product.name }}</p>
        <p>spec: {{ product.spec }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ProductA",
  computed: {
    ...mapState('productA', {
      products: state => state.products
    })
  }
};
</script>
