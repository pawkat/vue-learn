<template>
  <div class="todo">
    <h3 class="todo__title">TODO</h3>
    <form
      class="todo__add-option"
      @submit.prevent="addTodoOption(addOption)"
    >
      <input
        type="text"
        class="todo__field"
        v-model="addOption"
      >
      <input
        type="submit"
        class="btn"
        value="Add option"

      />
    </form>
    <div class="todo__buttons">
      <TodoRoutes
        v-for="item in todoRoutes"
        :key="item.text"
        v-bind="item"
        @todoRoute="todoRoute"
      />
      <button
        class="btn"
        @click="checkAll"
      >Check all</button>
      <button
        class="btn"
        @click="clearCompleted"
      >Clear completed</button>
    </div>
    <transition-group name="scale" class="todo-list">
      <TodoItems
        v-if="visibleTodo"
        v-for="todo in visibleTodo"
        :key="todo.id"
        v-bind="todo"
        @removeItem="removeItem"
        @checkItem="checkItem"
        @editItem="editItem"
      />
    </transition-group>
    <div class="todo__hint">
      <p>*для редактирования нажмите два раза на элемент списка, после окончания - на галочку</p>
    </div>

  </div>
</template>

<script>
import TodoItems from '../components/TodoItems'
import TodoRoutes from '../components/TodoRoutes'
import axios from 'axios'
export default {
  props: {
    // text: String
  },
  components: {
    TodoItems,
    TodoRoutes
  },
  computed: {
    visibleTodo: function () {
      if (this.currentTodos === 'completed') {
        return this.todoList.filter(todo => todo.checked === true);
      } else if (this.currentTodos === 'active') {
        return this.todoList.filter(todo => todo.checked === false);
      } else {
        return this.todoList;
      }
    }
  },
  methods : {
    addTodoOption: function (text) {
      if (text) {
        let option = {
          "text": text,
          "checked": false,
          "id": (new Date().getTime() + Math.random()).toString()
        };
        this.todoList.push(option);
        axios.post('http://localhost:3004/todoList/', option);
        this.addOption = '';
      }
    },
    async removeItem (id) {
      let option = this.todoList.find( item => item.id === id);
      await axios.delete(`http://localhost:3004/todoList/${id}`);
      this.todoList.splice(this.todoList.indexOf(option), 1);
    },
    async checkItem (id) {
      let option = this.todoList.find( item => item.id === id);
      option.checked = !option.checked;
      await axios.put(`http://localhost:3004/todoList/${id}`, option);
    },
    checkAll: function () {
      this.todoList.forEach( async function (el) {
        el.checked = true;
        await axios.put(`http://localhost:3004/todoList/${el.id}`, el);
      });
    },
    async editItem (id, text) {
      let option = this.todoList.find( item => item.id === id);
      option.text = text;
      await axios.put(`http://localhost:3004/todoList/${id}`, option);
    },
    async clearCompleted () {
      this.todoList.forEach(async (el) => {
        if (el.checked === true) {
          await axios.delete(`http://localhost:3004/todoList/${el.id}`);
        }
      });
      let newList = await axios.get(`http://localhost:3004/todoList/`);
      this.todoList = newList.data;
    },
    todoRoute: function (text) {
      this.currentTodos = `${text.toLowerCase()}`
    },

  },
  async created() {
    const {data} = await axios.get('http://localhost:3004/todoList');
    this.todoList = data;
  },
  data() {
    return {
      checked: false,
      addOption: '',
      todoList: [],
      currentTodos: '',
      todoRoutes: [
        {
          'text': 'All',
        },
        {
          'text': 'Active',
        },
        {
          'text': 'Completed',
        },
      ]
    }
  }
}
</script>

<style lang="sass">
.todo
  display: flex
  flex-direction: column
  align-items: center
  margin-bottom: 20px
  &__title
    font-size: 22px
    margin: 0 0 10px 0
  &__add-option
    display: flex
    margin-bottom: 20px
  &__buttons
    display: flex
    width: 100%
    justify-content: flex-end
    .btn
      margin-right: 10px
      &:last-child
        margin-right: 0
  &__field
    padding-left: 10px
    margin-right: 10px
  &__hint
    width: 100%
    text-align: right
    font-size: 14px
    p
      &:after
        content: ''
        display: inline-block
        margin: 0 40px 0 10px
        width: 20px
        height: 20px
        transform: rotate(-90deg)
        background-image: url('~/assets/arrow-35.png')
        background-size: cover

.todo-list
  display: flex
  flex-direction: column
  width: 100%
  &__item
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 10px
    position: relative
    padding: 5px 40px 5px 10px
    transition: all .5s ease
    &:last-child
      margin-bottom: 0
    &.is-checked
      opacity: .5
      .todo-list__text
        text-decoration: line-through
    &:hover
      background-color: #7f828b
      .todo-list__remove
        display: block
  &__item-content
    display: flex
    align-items: center
    width: 100%
    max-width: calc(100% - 80px)
  &__text
    padding: 0 5px
    margin-right: 20px
    width: 100%
    max-width: calc(100% - 50px)
    overflow: hidden
    text-overflow: ellipsis
    &.is-editing
      border: 1px solid royalblue
  &__edit
    width: 20px
    height: 20px
    background-size: cover
    border: none
    background-color: transparent
    cursor: pointer
    background-image: url('~/assets/check.png')



  &__text
    border: none
    background-color: transparent
    color: #000
  &__check
    margin-right: 10px
    width: 15px
    height: 15px
    flex-shrink: 0
  &__remove
    display: none
    position: absolute
    top: 50%
    right: 10px
    transform: translateY(-50%)
    border: none
    border-radius: 50%
    width: 24px
    height: 24px
    background-color: transparent
    background-image: url('~/assets/close.png')
    background-size: cover
    cursor: pointer


</style>
