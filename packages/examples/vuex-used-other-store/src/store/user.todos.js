export default {
  namespaced: true,
  state() {
    return {
      todos: [{ content: '吃飯', id: 1 }]
    }
  },
  actions: {
    insertTodo({ commit, rootState }, todo) {
      if(rootState.user.gender == "male") {
        console.log("do something when user gender is male")
      }else if(rootState.user.gender == "female") {
        console.log("do something when user gender is female")
      }
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