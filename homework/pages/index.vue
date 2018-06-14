<template>
    <div class="wrapper">
      <div class="posts">
        <input type="text" class="search" v-model="message" placeholder="Search post...">
        <transition-group name="scale">
          <post
            v-if="searchResult[currentPage - 1]"
            v-for="post in searchResult[currentPage - 1]"
            :key="post.id"
            v-bind="post"
          />
        </transition-group>
      </div>
      <div class="paging">
        <a href="#" class="paging__prev" v-on:click="currentPage = (currentPage - 1) > 0 ? (currentPage - 1) : currentPage"><img src="~/assets/chevron.png" alt="prev"></a>
        <div class="paging__items">
          <span class="paging__item"
                v-for="(post, i) in searchResult"
                :key="post.id"
                :class="{ 'is-active': currentPage === i + 1 }"
                v-on:click="currentPage = i + 1"
          >{{ i + 1 }}</span>
        </div>
        <a href="#" class="paging__next" v-on:click="currentPage = (currentPage + 1) <= searchResult.length ? (currentPage + 1) : currentPage"><img src="~/assets/chevron.png" alt="next"></a>
      </div>
    </div>
</template>

<script>
import MainLayout from '../layouts/MainLayout'
import Post from '../components/Post'
import animation from '../mixins/animation'
export default {
  layout: 'MainLayout',
  name: 'Home',
  components: {
    MainLayout,
    Post
  },
  mixins: [animation],
  computed: {
    searchResult: function () {
      let message = this.message;
      let result = [];
      for(let i = 0; i < this.posts.length; i++) {
        let post = this.posts[i];
        if(post.heading.toLowerCase().indexOf(message.toLowerCase()) !== -1) {
          result.push(post);
        }
      }
      let pageSize = this.pageSize;
      let visiblePosts = [];
      for (let i = 0; i < result.length / pageSize; i++) {
        let pages = result.slice(pageSize * i, pageSize * i + 2);
        visiblePosts.push(pages);
      }
      return visiblePosts;
    },
  },
  data () {
    return {
      message: '',
      validPosts: 0,
      currentPage: 1,
      pageSize: 2,
      posts: [
        {
          heading: 'Marketing Tips & Tricks From the\n' +
          '            Top Brands',
          description: 'Posted on May 21, 2018',
          url: '/post.jpg',
          text: '6Wunderkinder’s flagship product, Wunderlist, has been a massive hit since its inception. Arguably one of the best to manage your\n' +
          '            tasks in your business and personal life. What makes it different from any other app? Simplicity. You don’t need to fiddle around with\n' +
          '            so many unnecessary features like you would with traditional to-do apps. Soon as you open the app, Wunderlist dives right into your\n' +
          '            tasks and you can get to work.',
          id: '1'
        },
        {
          heading: 'Our Favourite Task Management\n' +
          '            App!',
          description: 'Posted on May 21, 2018',
          url: '/post_2.jpg',
          text: 'Fully scalable 3/4 view of iPhone 5 is available for download from Pixeden. This PSD template includes highly detailed mockup of the\n' +
          '            white and black iPhone 5. A perfect replica of the newly introduced Macbook Pro with Retina Display. Includes layered PSD file with\n' +
          '            option to scale to any preferred size. iPad 2 by Pixeden is a fully scalable vector template with smart layers. It comes with 3 detailed\n' +
          '            views of both black and white iPad 2.',
          id: '2'
        },
        {
          heading: 'Year in Review: Our Favourite Apps \n' +
          'from 2012 ',
          description: 'Posted on May 21, 2018',
          url: '/post_3.jpeg',
          text: 'The iPad mini is the newly introduced member of the “i” family. Pixeden has done a phenomenal job of replicating iPad Mini into a \n' +
          'vector form and has made it freely available for everyone to use. A second version of the iPhone 5 mockup template released by \n' +
          'Pixeden, which is the couterpart to the originally released black version. This template also includes high quality background floor \n' +
          'textures.',
          id: '3'
        },
        {
          heading: 'Paul Manafort, ex-Trump campaign aide, accused of witness tampering',
          description: 'Posted on May 21, 2018',
          url: '/post_4.jpg',
          text: 'Robert Mueller, who is investigating alleged Russian election interference, said Mr Manafort had contacted people related to his money laundering and tax fraud case in breach of his bail terms.\n' +
          '\n' +
          'Mr Manafort, 69, denies all charges.\n' +
          '\n' +
          'They are not connected with allegations of collusion between Russia and the Trump campaign during the US election.\n' +
          '\n' +
          'Mr Trump denies any collusion and has consistently spoken of a witch hunt.\n' +
          '\n' +
          'Mr Manafort\'s first trial, on charges of money laundering and illegal lobbying, is due to begin in September.\n' +
          '\n' +
          'Trump lawyer \'paid by Ukraine\' to arrange White House talks\n' +
          'Trump-Russia investigation: All you need to know',
          id: '4'
        },
        {
          heading: 'Robert Kennedy: What if US presidential hopeful had not been killed?\n',
          description: 'Posted on 4 June 2018',
          url: '/post_5.jpg',
          text: 'After Martin Luther King was killed, many believed senator and presidential hopeful Robert Kennedy was going to carry on the reforming fight. Fifty years on, some argue Kennedy\'s assassination had a profound impact on the direction of America.',
          id: '5'
        },
        {
          heading: 'Putin says Russia not aiming to divide EU',
          description: 'Posted on May 21, 2018',
          url: '/post_6.jpg',
          text: 'President Vladimir Putin has insisted Russia is not trying to split the European Union.\n' +
          '\n' +
          'His remarks come ahead of a visit to Austria, his first trip to a Western European country in almost a year.\n' +
          '\n' +
          'He told Austrian ORF television he wanted a "united and prosperous" EU, calling it Russia\'s most important commercial and economic partner.\n' +
          '\n' +
          'The pro-Putin United Russia party has close links with far-right parties in the EU, which alarms many liberals.\n' +
          '\n' +
          'The two populist parties now ruling Italy favour closer ties with Moscow and are both Eurosceptic.',
          id: '6'
        },
        {
          heading: 'Trump-Kim meeting: Preparations going well, says US',
          description: 'Posted on May 21, 2018',
          url: '/post_7.jpg',
          text: 'The US has said preparations for the 12 June between President Donald Trump and North Korean leader Kim Jong-un in Singapore are going well.\n' +
          '\n' +
          'The White House said the two men would first meet at 09:00 local time and that Mr Trump was receiving daily briefings.\n' +
          '\n' +
          'But it said sanctions would not be lifted against North Korea unless it gave up its nuclear weapons.\n' +
          '\n' +
          'With one week to go to the summit, hosted by Singapore, remarkably few details have been publicly confirmed.',
          id: '7'
        },
      ],


    }
  }
}
</script>

<style lang="sass">
  .wrapper
    max-width: 940px
    margin: 0 auto
  .paging
    display: flex
    align-items: center
    justify-content: center
    margin-bottom: 80px
    &__items
      margin: 0 10px
    &__item
      color: #111111
      font-family: "Proxima Nova - Semibold"
      font-size: 16px
      font-weight: 400
      line-height: 20px
      margin-right: 20px
      text-decoration: none
      position: relative
      padding: 5px
      cursor: pointer
      &:last-child
        margin-right: 0
      &.is-active
        &:before
          position: absolute
          content: ''
          display: block
          top: 50%
          left: 50%
          width: 20px
          height: 20px
          transform: translate(-50%, -50%)
          background-color: red
          border-radius: 50%
          z-index: -1
    &__prev, &__next
      display: flex
      justify-content: center
      align-items: center
      width: 29px
      height: 29px
      background-color: #111111
      padding: 10px
      box-sizing: border-box
      border-radius: 5px
      img
        max-width: 10px
    &__next
      img
        transform: rotate(180deg)
</style>
