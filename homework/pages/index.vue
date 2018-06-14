<template>
    <div class="wrapper">
        <!--<input type="text" class="search" v-model="message" placeholder="Search post...">-->
        <!--<transition-group name="scale">-->
          <!--<post-->
            <!--v-if="searchResult[currentPage - 1]"-->
            <!--v-for="post in searchResult[currentPage - 1]"-->
            <!--:key="post.id"-->
            <!--v-bind="post"-->
          <!--/>-->
        <!--</transition-group>-->
        <SearchPosts/>

    </div>
</template>

<script>
import MainLayout from '../layouts/MainLayout'
// import Post from '../components/Post'
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
