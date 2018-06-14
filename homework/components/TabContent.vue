<template>
  <div class="tab-content-item">
    <div class="tab-content-item__img">
      <img :src="url" alt="">
    </div>
    <div class="tab-content-item__content">
      <div class="tab-content-item__name">{{ name }}</div>
      <div class="tab-content-item__position">{{ position }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      name: String,
      position: String,
      url: String,
      tabName: {
        validator: function (value) {
          return ['Male', 'Female'].indexOf(value) !== -1
        }
      },
      id: Number,
    },
  }
</script>

<style lang="sass">
  .tab-content
    padding: 20px 0
  .tab-content-item
    display: flex
    border: 1px solid #111111
    border-radius: 5px
    padding: 10px
    margin-bottom: 10px
    &:last-child
      margin-bottom: 0
    &__img
      max-width: 100px
      height: auto
      margin-right: 20px
      img
        width: 100%
    &__content
      display: flex
      flex-direction: column
</style>
