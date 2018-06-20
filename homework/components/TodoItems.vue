<template>
  <div
    class="todo-list__item"
    :class="checked ? 'is-checked' : ''"
    @dblclick="editing = true"
  >
    <span class="todo-list__item-content">
      <input
        type="checkbox"
        class="todo-list__check"
        @input="$emit('checkItem', id)"
        :checked="checked ? checked : ''"
      >
    <span
      class="todo-list__text"
      :disabled="editing ? disabled : ''"
      :contenteditable="editing ? true : false"
    >{{ text }}</span>
    </span>
    <button
      class="todo-list__edit"
      :class="editing ? 'is-active' : ''"
      @click="finishEdit"
    >
    </button>
    <button
      class="todo-list__remove"
      @click="$emit('removeItem', id)"
    ></button>
  </div>
</template>

<script>
  export default {
    props: {
      text: String,
      id: String,
      disabled: Boolean,
      checked:  Boolean,
    },
    methods: {
      finishEdit: function (event) {
        this.editing = false;
        let text = event.target.parentElement.children[0].children[1].innerHTML;
        this.$emit('finishEditing', this.id, text);
      },
      // startEditing: function () {
      //   this.editing = true;
        // console.log(document.querySelector(` #${this.id} .todo-list__text`));
        // document.querySelector('.todo-list__text').focus();
      // }
    },
    data() {
      return {
        editing: false,
      }
    }
  }
</script>

<style lang="sass">

</style>
