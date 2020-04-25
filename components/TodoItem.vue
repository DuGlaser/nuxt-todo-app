<template>
  <div class="todo-item" @dblclick="handleMarked">
    <span :class="{ 'is-done': todo.isDone }">{{ todo.body }}</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TodoItem',
  props: ['todo'],
  methods: {
    ...mapActions(['editTodo']),
    handleMarked() {
      const newTodo = {
        id: this.todo.id,
        body: this.todo.body,
        isDone: !this.todo.isDone
      }
      console.log(newTodo)
      this.editTodo(newTodo)
    }
  }
}
</script>

<style scoped>
.todo-item {
  display: flex;
  justify-content: center;
  align-self: center;
  width: 100%;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-left: #3e96d5 3px solid;
  box-shadow: 1px 4px 4px #ccc;
}
.is-done {
  text-decoration: line-through;
}
</style>
