<template>
  <label
    class="todo-list__item"
    :class="checked ? 'is-checked' : ''"
    @dblclick="editItem"
  >
    <input
      type="checkbox"
      class="todo-list__check"
      @input="checked = !checked"
      :checked="checked ? checked : ''"
    >
    <span class="todo-list__text">{{ text }}</span>
    <button
      class="todo-list__remove"
      @click="$emit('removeItem', id)"
    ></button>
  </label>
</template>

<script>
  export default {
    props: {
      text: String,
      id: String,
      // checked: {
      //   type: Boolean,
      //   default: false
      // }
    },
    methods: {
      editItem: function () {

      }
      // removeItem: function (id) {
      //   console.log(this, id);
      // }
    },
    data() {
      return {
        checked: false
      }
    }
  }
</script>

<style lang="sass">

</style>
