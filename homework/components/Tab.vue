<template>
  <button
    type="button"
    class="tab"
    @click="$emit('switch-tab', tabName)"
  >
    <span class="tab__name">{{ tabName }}</span>
  </button>
</template>

<script>
  export default {
    props: {
      tabName: {
        validator: function (value) {
          return ['Male', 'Female', 'All'].indexOf(value) !== -1
        }
      },
    },
  }
</script>

<style lang="sass">
  .tabs
    display: flex
  .tab
    padding: 10px
    cursor: pointer
    border: none
    &:hover
      background-color: #7f828b
    &.is-active
      background-color: #47494e
    &__name
      font-size: 18px

</style>
