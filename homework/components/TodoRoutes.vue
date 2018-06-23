<template>
  <button
    class="btn"
    @click="$emit('todoRoute', text)"
  >{{ text }}</button>
</template>

<script>
  export default {
    props: {
      text: String,
    },

  }
</script>

<style lang="sass">

</style>
