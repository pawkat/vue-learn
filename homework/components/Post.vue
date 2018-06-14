<template>
  <div class="post underlined">
    <h2 class="post__title h2">{{heading}}</h2>
    <p class="post__description">{{description}}</p>
    <img class="post__img" :src="url" alt="">
    <p class="post__text">{{text}}</p>
    <p v-show="visible">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis hic impedit iste itaque odit pariatur placeat praesentium quaerat, qui repellat, repellendus similique ullam vitae voluptate. Blanditiis consequuntur ducimus ipsum maiores neque sed tempore. Architecto eligendi tempore veritatis vitae. Ab ad atque eum fugit nostrum obcaecati pariatur provident quaerat sed!</p>
    <div class="post__more"
       v-on:click="visible=!visible"
    >
      <img src="~/assets/read-more-icon.png" alt="more">
      Read More</div>

  </div>
</template>

<script>
export default {
  props: {
    heading: String,
    url: String,
    description: String,
    text: String
  },
  data() {
    return {
       visible: false
      }
    }
}
</script>

<style lang="sass">
  .post
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    margin-bottom: 50px
    &:last-child
      border-bottom: none
      margin-bottom: 0
    &__title
      max-width: 710px
      padding: 0 10px
      box-sizing: border-box
    &__description
      width: 163px
      height: 12px
      color: #777777
      font-family: "Proxima Nova - Semibold"
      font-size: 14px
      font-weight: 400
      line-height: 1
      margin-bottom: 45px
    &__img
      max-width: 328px
      margin-bottom: 45px
    &__text
      color: #111111
      font-family: "Proxima Nova"
      font-size: 16px
      font-weight: 400
      line-height: 1.25
      margin-bottom: 27px
    &__more
      display: flex
      align-items: center
      color: #111111
      font-family: "Proxima Nova - Semibold"
      font-size: 16px
      font-weight: 400
      line-height: 1.25
      text-decoration: none
      align-self: flex-start
      cursor: pointer
      img
        width: 22px
        height: 22px
        margin-right: 7px
      &.is-active
        background-color: red
</style>
