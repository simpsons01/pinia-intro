export default {
  namespaced: true,
  state() {
    return {
      todos: [{ content: '吃飯', id: 1 }]
    }
  },
  actions: {
    insertTodo({ commit }, todo) {
      commit('updateTodos', todo)
    }
  },
  mutations: {
    updateTodos(state, todo) {
      state.todos = [
        ...state.todos,
        todo
      ]
    }
  }
}