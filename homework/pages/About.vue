<template>
    <div class="about">
      <div class="about__wrapper wrapper">
        <h2 class="h2 about__title">What We Are All About</h2>
        <div class="about__description underlined">
          <p>It’s not always easy to filter out noise and purely focus on the content. Too many blogs and news sites are filled with colourful and distracting
            advertisement left right and centre. This is where we do things differently! Rather than just focusing purely and generating revenue, we focus
            on great user experience.
          </p>
          <p>You will notice that our news articles are content focused and free of any distractions. On top of that, we deliver content revolving design on a
            daily basis. Offering you insightful tutorials, techniques, design inspirations, mobile app development, coding, unique advertisements, and
            freebies.
          </p>
          <p>Our focus is and forever will be to bring high quality resources to lean from and to be inspired. Visit us daily for new design related articles!</p>
        </div>
        <h2 class="h2">Meet Our Team!</h2>
        <input type="text" class="search" v-model="message" placeholder="Search teammate...">
        <!--<teammate-->
          <!--v-if="searchResult"-->
          <!--:key="searchResult.id"-->
          <!--v-bind="searchResult"-->
        <!--/>-->
        <div class="team">
          <teammate
            v-if="searchResult"
            v-for="teammate in searchResult"
            :key="teammate.id"
            v-bind="teammate"
          />
        </div>
      </div>
    </div>
</template>

<script>
import MainLayout from '../layouts/MainLayout'
import Teammate from '../components/Teammate'
export default {
  layout: 'MainLayout',
  name: 'About',
  components: {
    MainLayout,
    Teammate
  },
  computed: {
    searchResult: function () {
      let message = this.message;
      let result = [];
      for(let i = 0; i < this.team.length; i++) {
        let teammate = this.team[i];
        if(teammate.name.toLowerCase().indexOf(message.toLowerCase()) !== -1) {
          result.push(teammate);
        }
      }
      return result;

    }
  },
  data () {
    return {
      message: '',
      team: [
        {
          name: 'Kimberly Thompson',
          position: 'Founder & CEO',
          description: 'Kimberly is the founder and the CEO of our company. With 10 years of experience in the tech industry, she ensures all operations are running smoothly.',
          url: '/teammate-1.png',
          id: '1'
        },
        {
          name: 'Rico Masi',
          position: 'Code Master',
          description: 'There’s no challege Rico can’t\n' +
          '              tame! Making sure everything is\n' +
          '              safe and secure on the back\n' +
          '              end, you can say that he’s the\n' +
          '              heart of this team. ',
          url: '/teammate-2.jpg',
          id: '2'
        },
        {
          name: 'Uku Mason',
          position: 'Marketing Expert',
          description: 'Not your average marketer. Uku\n' +
          '              manages everything from,\n' +
          '              marketing and finance to\n' +
          '              customer relation.',
          url: '/teammate-3.png',
          id: '3'
        },
        {
          name: 'Blaz Robar',
          position: 'Design Guru',
          description: 'A Highly experienced UI/UX\n' +
          '              designer, Blaz brings our ideas\n' +
          '              to life with his beautiful visual\n' +
          '              designs.',
          url: '/teammate-4.png',
          id: '4'
        },
        {
          name: 'Jamie Adams',
          position: 'Assistant',
          description: 'Don’t let the picture fool you.\n' +
          '              Jamie is the glue that holds our\n' +
          '              team together! Managing\n' +
          '              everthing from recruitments,\n' +
          '              social gatherings, and everyday\n' +
          '              operations.',
          url: '/teammate-5.png',
          id: '5'
        }
      ]
    }
  },
  comments: {
    MainLayout
  }
}
</script>

<style lang="sass">
  .about
    &__description
      margin-bottom: 50px
    &__wrapper
      display: flex
      flex-direction: column
      align-items: center
  .team
    display: flex
    flex-wrap: wrap
    align-items: flex-start
    justify-content: center

  .teammate
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    max-width: 233px
    margin-right: 75px
    text-align: center
    &:last-child
      margin-right: 0
    &:nth-child(3n)
      margin-right: 0
    &__img
      width: 220px
      height: 220px
      background-color: #111111
      border-radius: 50%
      background-size: cover
      margin-bottom: 30px
    &__name
      color: #111111
      font-family: "Proxima Nova - Semibold"
      font-size: 16px
      font-weight: 400
      margin-bottom: 10px
    &__position
      color: #555555
      font-family: "Proxima Nova - Semibold"
      font-weight: 600
      letter-spacing: -0.4px
      margin-bottom: 30px
    &__description
      font-family: "Proxima Nova - Regular"
      font-weight: 400
      letter-spacing: -0.4px
      margin-bottom: 70px

</style>