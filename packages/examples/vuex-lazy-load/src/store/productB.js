export default {
  namespaced: true,
  state: () => ({
    products: [],
  }),
  actions: {
    getProducts({ commit }) {
      commit('updateProducts',[ { name: "air pods pro", id: 1, type: "wireless" }])
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
