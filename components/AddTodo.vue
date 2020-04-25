<template>
  <div class="add-todo">
    <form @submit.prevent="onSubmit()">
      <input type="text" v-model="title" />
      <input type="submit" />
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AddTodo',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    ...mapActions(['createTodo']),
    onSubmit() {
      const newTodo = {
        body: this.title,
        isDone: false
      }
      this.createTodo(newTodo)
    }
  }
}
</script>

<style scoped>
.add-todo {
  margin-bottom: 2rem;
}
</style>
