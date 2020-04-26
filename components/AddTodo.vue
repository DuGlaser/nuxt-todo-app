<template>
  <form class="add-todo" @submit.prevent="onSubmit()">
    <input v-model="title" type="text" />
    <input type="submit" value="追加" />
  </form>
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
  display: flex;
  max-width: 600px;
  width: 80%;
  height: 3rem;
}

input[type='text'] {
  flex: 5;
  padding: 1rem;
  font-size: 1.2rem;
  border: 2px solid #3e96d5;
}

input[type='submit'] {
  flex: 1;
  border: none;
  background: #3e96d5;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
