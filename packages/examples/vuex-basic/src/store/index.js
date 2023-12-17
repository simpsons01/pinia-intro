import { createStore  } from "vuex";

export default createStore({
  state: {
    count: 0
  },
  actions: {
    addCountByOne({ commit, state }) {
      commit('updateCount', state.count + 1)
    }
  },
  mutations: {
    updateCount(state, count) {
      state.count = count
    }
  }
})