<template>
  <div class="todo-area">
    <div v-for="todo in allTodos" :key="todo.id">
      <TodoItem :todo="todo" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import TodoItem from './TodoItem'

export default {
  name: 'Todos',
  components: { TodoItem },
  methods: {
    ...mapActions(['getTodos'])
  },
  computed: {
    ...mapGetters(['allTodos'])
  },
  created() {
    this.getTodos()
  }
}
</script>

<style scoped>
.todo-area {
  max-width: 600px;
  width: 80%;
}
</style>
