export default {
  namespaced: true,
  state: () => ({
    products: [],
  }),
  actions: {
    getProducts({ commit }) {
      commit('updateProducts',[ { name: "吹風氣", id: 1, spec: "110v" }])
    },
  },
  mutations: {
    updateProducts(state, products) {
      state.products = [
        ...state.products,
        ...products
      ]
    }
  }
}