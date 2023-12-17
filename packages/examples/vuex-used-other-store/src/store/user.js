import userTodosModule from "./user.todos.js"

export default {
  namespaced: true,
  state() {
    return {
      name: 'ray.zhu',
      gender: "male"
    }
  },
  actions: {
    getName({ commit, state }) {
      commit('updateName', 'ray.zhu')
    }
  },
  mutations: {
    updateName(state, name) {
      state.name = name
    }
  },
  modules: {
    todos: userTodosModule
  }
}