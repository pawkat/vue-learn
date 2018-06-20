<template>
  <div class="todo">
    <h3 class="todo__title">TODO</h3>
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
    <div class="todo__buttons">
      <button
        class="btn"
        @click="checkAll"
      >Check all</button>
      <button
        class="btn"
        @click="clearCompleated"
      >Clear completed</button>
    </div>
    <transition-group name="scale" class="todo-list">
      <TodoItems
        v-for="item in todoList"
        :key="item.id"
        v-bind="item"
        @removeItem="removeItem"
        @checkItem="checkItem"
        @finishEditing="finishEdit"
      />
    </transition-group>
    <div class="todo__hint">
      <p>*для редактирования нажмите два раза на элемент списка</p>
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
          "text": text,
          "checked": false,
          "id": (this.todoList.length + 1).toString()
        };
        this.todoList.push(option);
        axios.post('http://localhost:3004/todoList/', option);
      }
    },
    async removeItem (id) {
      let option = this.todoList.find( item => item.id === id);
      await axios.delete(`http://localhost:3004/todoList/${id}`);
      this.todoList.splice(this.todoList.indexOf(option), 1);
    },
    // async editItem (id) {
    //   console.log('edit');
    //   let option = this.todoList.find( item => item.id === id);
    // },
    async checkItem (id) {
      let option = this.todoList.find( item => item.id === id);
      option.checked = !option.checked;
      await axios.put(`http://localhost:3004/todoList/${id}`, option);
      let newList = await axios.get(`http://localhost:3004/todoList/`);
      this.todoList = newList.data;
    },
    checkAll: function () {
      this.todoList.forEach( async function (el) {
        el.checked = true;
        await axios.put(`http://localhost:3004/todoList/${el.id}`, el);
      });
    },
    async finishEdit (id, text) {
      let option = this.todoList.find( item => item.id === id);
      option.text = text;
      await axios.put(`http://localhost:3004/todoList/${id}`, option);
      let newList = await axios.get(`http://localhost:3004/todoList/`);
      this.todoList = newList.data;
    },
    async clearCompleated () {
      console.log(this.todoList);
      this.todoList.forEach(async (el, i) => {
        if (el.checked === true) {
          await axios.delete(`http://localhost:3004/todoList/${el.id}`);
        }
      });
      let newList = await axios.get(`http://localhost:3004/todoList/`);
      this.todoList = newList.data;
    }
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
  &__text
    width: 100%
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
    display: none
    &.is-active
      display: block


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
