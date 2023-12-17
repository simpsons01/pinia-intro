import { createRouter, createWebHistory } from "vue-router"
import productAStore from "../store/productA"
import productBStore from "../store/productB"
import store from "../store"
import ProductA from "../pages/ProductA.vue"
import ProductB from "../pages/ProductB.vue"
import Home from "../pages/Home.vue"

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { 
      path: '/productA', 
      component: ProductA,
      beforeEnter: (from, to, next) => {
        store.registerModule("productA", productAStore)
        next()
      }
    },
    { 
      path: '/productB', 
      component: ProductB,
      beforeEnter: (from, to, next) => {
        store.registerModule("productB", productBStore)
        next()
      }
    }
  ],
})