<template>
  <div>
    <input type="checkbox" @click="onChange" />
    {{ todo.title }}
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['todo'],
  methods: {
    onChange() {
      console.log(this.todo.id)
    }
  }
}
</script>

<style></style>
