<template>
  <div class="todo">
    <h3 class="todo__title">TODO title</h3>
    <div class="todo__add-option">
      <input
        type="text"
        class="todo__field"
        v-model="addOption"
      >
      <button
        class="btn"
        @click="addTodoOption(addOption)"
      >Add option</button>
    </div>
    <div class="todo-list">
      <transition-group name="scale">
        <TodoItems
          v-for="item in todoList"
          :key="item.id"
          v-bind="item"
          @removeItem="removeItem"
        />
      </transition-group>
    </div>

  </div>
</template>

<script>
import TodoItems from '../components/TodoItems'
import axios from 'axios'
export default {
  props: {
    // text: String
  },
  components: {
    TodoItems
  },
  methods : {
    addTodoOption: function (text) {
      if (text) {
        let option = {
          text: text,
          id: (this.todoList.length + 1).toString()
        };
        this.todoList.push(option);
      }
    },
    removeItem: function (id) {
      let list = this.todoList;
      list.forEach(function (el, i) {
        if (el.id === id) {
          list.splice(i, 1)
        }
      })
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
      todoList: []
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
    &__field
      padding-left: 10px
      margin-right: 10px
  .todo-list
    display: flex
    flex-direction: column
    width: 100%
    margin-bottom: 20px
    &__item
      display: flex
      align-items: center
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
      width: 20px
      height: 20px
      background-color: transparent
      background-image: url('~/assets/close.png')
      background-size: cover
      cursor: pointer


</style>
