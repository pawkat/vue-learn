<template>
  <div class="wrapper">
    <TodoList/>
  </div>
</template>

<script>
import MainLayout from '../layouts/MainLayout'
import animation from '../mixins/animation'
import TodoList from '../components/TodoList'
export default {
  layout: 'MainLayout',
  name: 'Todo',
  components: {
    MainLayout,
    TodoList
  },
  mixins: [animation],

  data () {
    return {
      todoForm: false,
    }
  },
}
</script>

<style lang="sass">



</style>
