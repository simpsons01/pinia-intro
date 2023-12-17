import { createRouter, createWebHistory } from "vue-router"
import { useStore as useProductAStore } from "../store/productA"
import { useStore as useProductBStore } from "../store/productB"
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
        const store = useProductAStore()
        store.getProducts()
        next()
      }
    },
    { 
      path: '/productB', 
      component: ProductB,
      beforeEnter: (from, to, next) => {
        const store = useProductBStore()
        store.getProducts()
        next()
      }
    }
  ],
})