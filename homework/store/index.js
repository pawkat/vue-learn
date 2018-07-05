import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);



const store = () => new Vuex.Store({

  state: {
    todos: []
  },
  mutations: {
    add (state, text) {
      if (text) {
        let option = {
          "text": text,
          "checked": false,
          "id": (new Date().getTime() + Math.random()).toString()
        };
        state.todos.push(option);
        axios.post('http://localhost:3004/todoList/', option);
      }
    },
    remove (state, id) {
      let option = state.todos.find( item => item.id === id);
      axios.delete(`http://localhost:3004/todoList/${id}`);
      state.todos.splice(state.todos.indexOf(option), 1);
    },
    check (state, id) {
      let option = state.todos.find( item => item.id === id);
      option.checked = !option.checked;
      axios.put(`http://localhost:3004/todoList/${id}`, option);
    },
    edit (state, data) {
      let option = state.todos.find( item => item.id === data.id);
      option.text = data.text;
      axios.put(`http://localhost:3004/todoList/${data.id}`, option);
    },
    checkAll (state) {
      state.todos.forEach( function (el) {
        el.checked = true;
        axios.put(`http://localhost:3004/todoList/${el.id}`, el);
      });
    },
    clearCompleted (state) {
      state.todos.forEach((el) => {
        if (el.checked === true) {
          axios.delete(`http://localhost:3004/todoList/${el.id}`);
        }
      });
      let active = state.todos.filter( item => item.checked === false);
      state.todos = active;
    },
    getData (state, payload) {
      state.todos = payload;
    }

  },
  actions: {
    async created(context) {
      const {data} = await axios.get('http://localhost:3004/todoList');
      context.commit('getData', data)
    },
  },
})

export default store



