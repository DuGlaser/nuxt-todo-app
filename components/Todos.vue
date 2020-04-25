<template>
  <div>
    <div v-for="todo in allTodos" :key="todo.id">
      <TodoItem :todo="todo" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TodoItem from './TodoItem'

export default {
  name: 'Todos',
  components: { TodoItem },
  methods: {
    ...mapActions()
  },
  computed: {
    ...mapGetters(['allTodos'])
  }
}
</script>
