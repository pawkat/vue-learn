<template>
    <div class="wrapper">

        <SearchPosts/>

    </div>
</template>

<script>
import MainLayout from '../layouts/MainLayout'
import animation from '../mixins/animation'
import SearchPosts from '../components/SearchPosts'
export default {
  layout: 'MainLayout',
  name: 'Home',
  components: {
    MainLayout,
    SearchPosts
  },
  mixins: [animation],
  data () {
    return {

    }
  }
}
</script>

<style lang="sass">
  .wrapper
    max-width: 940px
    margin: 0 auto
</style>
