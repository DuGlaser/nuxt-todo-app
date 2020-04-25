// import axios from 'axios'

const state = {
  todos: [
    {
      id: 1,
      title: 'todo title',
      isCompleted: false
    }
  ]
}
const getters = {
  allTodos: (state) => state.todos
}
const actions = {}
const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
}
