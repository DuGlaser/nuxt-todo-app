<template>
  <div
    class="todo-item"
    :class="{ 'is-done-item': todo.isDone }"
    @dblclick="handleMarked"
  >
    <span :class="{ 'is-done': todo.isDone }">{{ todo.body }}</span>
    <fa :icon="faTrashAlt" class="trash-icon" @click="handleDelete" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'TodoItem',
  props: ['todo'],
  methods: {
    ...mapActions(['editTodo', 'deleteTodo']),
    handleMarked() {
      const newTodo = {
        id: this.todo.id,
        body: this.todo.body,
        isDone: !this.todo.isDone
      }
      this.editTodo(newTodo)
    },
    handleDelete() {
      this.deleteTodo(this.todo.id)
    }
  },
  computed: {
    faTrashAlt() {
      return faTrashAlt
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
  padding: 0 2rem;
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
  flex: 1;
}

.is-done-item {
  border-left: #d53e3e 8px solid;
}

.trash-icon:hover {
  color: #d53e3e;
  transition: 0.2;
}

.is-done {
  text-decoration: line-through;
}
</style>
