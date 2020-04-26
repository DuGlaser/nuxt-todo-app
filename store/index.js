import axios from 'axios'

const BASE_URL = 'http://localhost:5000/todos'

const state = () => ({
  todos: []
})
const getters = {
  allTodos: (state) => state.todos
}
const actions = {
  async getTodos({ commit }) {
    const res = await axios.get(BASE_URL)
    commit('setTodos', res.data)
  },

  async editTodo({ commit }, todo) {
    try {
      await axios.post(`${BASE_URL}/edit/${todo.id}`, {
        body: todo.body,
        isDone: todo.isDone
      })

      const res = await axios.get(BASE_URL)
      commit('setTodos', res.data)
    } catch (error) {
      console.log(error)
    }
  },

  async createTodo({ commit }, todo) {
    try {
      await axios.post(BASE_URL, todo)
      const res = await axios.get(BASE_URL)
      commit('setTodos', res.data)
    } catch (err) {
      console.log(err)
    }
  }
}
const mutations = {
  setTodos: (state, todos) => {
    state.todos = todos
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
