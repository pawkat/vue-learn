<template>
    <div class="wrapper">
      <h2 class="h2">Tabs page</h2>
      <div class="tabs">
        <tab
          v-for="tab in tabs"
          :key="tab.tabName"
          :class="{ 'is-active': currentTab === tab.tabName }"
          v-bind="tab"
          @switch-tab="switchTab"
        />
      </div>

      <div class="tab-content">
        <transition-group name="scale">
          <tabContent
            v-if="showTabContent"
            v-for="item in showTabContent"
            :key="item.id"
            v-bind="item"
          />
        </transition-group>
      </div>
    </div>
</template>

<script>
  import MainLayout from '../layouts/MainLayout'
  import Tab from '../components/Tab'
  import TabContent from '../components/TabContent'
  import animation from '../mixins/animation'
  export default {
    layout: 'MainLayout',
    name: 'About',
    components: {
      MainLayout,
      Tab,
      TabContent,
    },
    mixins: [animation],
    computed: {
      showTabContent: function () {
        let items = this.tabContent;
        if(this.currentTab === 'All') {
          return items;
        } else {
          let currentTab = this.currentTab;
          let result = [];
          items.forEach(function (el) {
            if (el.tabName === currentTab) {
              result.push(el);
            }
          });
          return result;
        }
      },
    },
    methods: {
      switchTab: function (tabName) {
        if(tabName !== this.tabName) {
          this.currentTab = tabName;
        }
      }
    },
    data () {
      return {
        // currentRoute: $route,
        currentTab: 'All',
        tabs: [
          {
            tabName: 'All'
          },
          {
            tabName: 'Male'
          },
          {
            tabName: 'Female'
          }
        ],
        tabContent: [
          {
            tabName: 'Male',
            name: 'Kimberly Thompson',
            position: 'Founder & CEO',
            url: '/teammate-1.png',
            id: 1
          },
          {
            tabName: 'Male',
            name: 'Rico Masi',
            position: 'Code Master',
            url: '/teammate-2.jpg',
            id: 2
          },
          {
            tabName: 'Female',
            name: 'Rebecca Thompson',
            position: 'Frontend Developer',
            url: '/woman.png',
            id: 3
          },
          {
            tabName: 'Male',
            name: 'Uku Mason',
            position: 'Marketing Expert',
            url: '/teammate-3.png',
            id: 4
          },
          {
            tabName: 'Female',
            name: 'Regina Johnson',
            position: 'Assistant',
            url: '/woman-1.png',
            id: 5
          },
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
