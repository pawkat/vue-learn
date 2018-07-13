import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

function createArr(obj) {
  let arr = [];
  for(let key in obj) {
    let option = Object.assign({}, obj[key]);
    option.id = key;
    arr.push(option);
  }
  return arr;
}
function appendLoader() {
  if (!document.querySelector('.loader-wrap')) {
    let loader = document.createElement('div');
    loader.className = "loader-wrap";
    loader.innerHTML = "<div class='loader-wrap__bg'></div><div class='loader'><div class='loader__first-bar'></div><div class='loader__second-bar'></div></div>";
    document.querySelector('.todo-list').appendChild(loader);
  }
}

function removeLoader() {
  let loader = document.querySelector('.loader-wrap');
  if (loader) {
    loader.remove();
  }

}
async function updateData(context) {
  let {data} = await axios.get('https://vue-todo-fde52.firebaseio.com/todos.json');
  let newTodos = createArr(data);
  context.commit('updateData', newTodos)
}

const store = () => new Vuex.Store({

  state: {
    todos: []
  },
  mutations: {
    updateData (state, todos) {
      state.todos = todos;
      removeLoader();
    },
    // edit (state, data) {
    //   let option = state.todos.find( item => item.id === data.id);
    //   option.text = data.text;
    //   axios.put(`http://localhost:3004/todoList/${data.id}`, option);
    // },
    // checkAll (state) {
    //   state.todos.forEach( function (el) {
    //     el.checked = true;
    //     axios.put(`http://localhost:3004/todoList/${el.id}`, el);
    //   });
    // },
    // clearCompleted (state) {
    //   state.todos.forEach((el) => {
    //     if (el.checked === true) {
    //       axios.delete(`http://localhost:3004/todoList/${el.id}`);
    //     }
    //   });
    //   let active = state.todos.filter( item => item.checked === false);
    //   state.todos = active;
    // },
    getData (state, payload) {
      state.todos = createArr(payload);
    }

  },
  actions: {
    async created(context) {
      const {data} = await axios.get('https://vue-todo-fde52.firebaseio.com/todos.json');
      context.commit('getData', data)
    },
    async add(context, text) {
        if (text) {
          appendLoader();
          let option = {
            "text": text,
            "checked": false,
            // "id": (new Date().getTime() + Math.random()).toString()
          };
          await axios.post('https://vue-todo-fde52.firebaseio.com/todos.json', option);
          updateData(context);
          // let {data} = await axios.get('https://vue-todo-fde52.firebaseio.com/todos.json');
          // let newTodos = createArr(data);
          // context.commit('updateData', newTodos)
        }
    },
    async remove(context, id) {
      appendLoader();
      await axios.delete(`https://vue-todo-fde52.firebaseio.com/todos/${id}.json`);
      updateData(context);
    },
    async check (context, id) {
      appendLoader();
      let option = context.state.todos.find( item => item.id === id);
      option.checked = !option.checked;
      // delete(option.id);
      await axios.put(`https://vue-todo-fde52.firebaseio.com/todos/${id}.json`, option);
      updateData(context);
    },
    checkAll (context) {
      context.state.todos.forEach(async function (el) {
        appendLoader();
        el.checked = true;
        let id = el.id;
        // delete(el.id);
        await axios.put(`https://vue-todo-fde52.firebaseio.com/todos/${id}.json`, el);
        updateData(context);
      });
    },
    async clearCompleted (context) {
      appendLoader();
      context.state.todos.forEach(async(el) => {
        if (el.checked === true) {
          console.log(el.id);
          await axios.delete(`https://vue-todo-fde52.firebaseio.com/todos/${el.id}.json`);
        }
      });
      updateData(context);
    },
    async edit (context, data) {
      appendLoader();
      let option = context.state.todos.find( item => item.id === data.id);
      option.text = data.text;
      let id = option.id;
      delete(option.id);
      await axios.put(`https://vue-todo-fde52.firebaseio.com/todos/${id}.json`, option);
      updateData(context);
    },
  }
});

export default store



