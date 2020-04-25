<template>
  <div class="container">
    <AddTodo />
    <Todos />
  </div>
</template>

<script>
import Todos from '../components/Todos'
import AddTodo from '../components/AddTodo'

export default {
  components: { Todos, AddTodo }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
