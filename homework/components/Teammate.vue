<template>
  <div class="teammate">
    <img :src="url" alt="" class="teammate__img">
    <div class="teammate__name">{{name}}</div>
    <div class="teammate__position">{{position}}</div>
    <div class="teammate__description">{{description}}</div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    position: String,
    url: String,
    description: String
  }
}
</script>

<style lang="sass">
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
