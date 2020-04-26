<template>
  <div
    class="todo-item"
    :class="{ 'is-done-item': todo.isDone }"
    @dblclick="handleMarked"
  >
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
      this.editTodo(newTodo)
    }
  }
}
</script>

<style scoped>
.todo-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4rem;
  margin-bottom: 1rem;
  background-color: #fff;
  border-left: #3e96d5 8px solid;
  box-shadow: 1px 4px 4px #ccc;
}

.todo-item:hover {
  box-shadow: 1px 4px 9px #ccc;
}

.todo-item span {
  font-size: 1.2rem;
}

.is-done-item {
  border-left: #d53e3e 8px solid;
}

.is-done {
  text-decoration: line-through;
}
</style>
