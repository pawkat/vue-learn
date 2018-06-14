<template>
  <div>
    <input
      type="text"
      class="search"
      v-model="message"
      placeholder="Search..."
      @input="$emit('searchMessage', message)"
    >
  </div>
</template>

<script>
  export default {
    name: 'SearchInput',
    components: {
    },
    data () {
      return {
        message: ''
      }
    }
  }
</script>

<style lang="sass">
  .search
    margin-bottom: 10px
    padding: 10px
    min-width: 300px
</style>
