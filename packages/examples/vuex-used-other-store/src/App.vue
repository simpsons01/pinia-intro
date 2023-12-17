<template>
  <div id="app">
    hello，I'm {{ name }}
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{ todo.content }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState('user', {
      name: state => state.name
    }),
    ...mapState('user/todos', {
      todos: state => state.todos
    })
  },
  methods: mapActions("user/todos", ["insertTodo"]),
  mounted() {
    this.insertTodo({ content: '遛狗', id: 2 })
  }
};
</script>


