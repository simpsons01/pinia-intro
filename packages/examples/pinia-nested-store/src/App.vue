
<script>
import { computed } from "vue";
import { useStore as useUserStore } from "./store/user";
import { useStore as useUserTodosStore } from "./store/user.todos";
export default {
  setup() {
    const userStore = useUserStore();

    const userTodosStore = useUserTodosStore()

    const name = computed(() => userStore.name);

    const todos = computed(() => userTodosStore.todos);

    return {
      name,
      todos
    };
  },
};
</script>

<template>
  <div id="app">
    hello，I'm {{ name }}
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{ todo.content }}</li>
    </ul>
  </div>
</template>


