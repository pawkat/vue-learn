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
      @keyup="newText = $event.target.innerText"
    >{{ text }}</span>
    </span>
    <button
      class="todo-list__edit"
      v-show="editing"
      @click="edit"
    ></button>
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
    computed: {

    },
    methods: {
      edit: function () {
        this.editing = false;
        if (this.newText) this.$emit('editItem', this.id, this.newText);
      },
    },
    data() {
      return {
        editing: false,
        newText: ''
      }
    }
  }
</script>

<style lang="sass">

</style>
