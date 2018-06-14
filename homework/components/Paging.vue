<template>
  <div class="paging">
    <button
      class="paging__prev"
      :class="current === 1 ? 'is-disabled' : ''"
      @click="$emit('paging', 'prev')"
    >
      <img src="~/assets/chevron.png" alt="prev">
    </button>
    <div class="paging__items">
      <button
        class="paging__item"
        v-for="i in length"
        :key="i"
        :class="current === i ? 'is-active' : ''"
        @click="$emit('paging', i)"
      >
        {{ i }}
      </button>
    </div>
    <button
      class="paging__next"
      :class="current === length ? 'is-disabled' : ''"
      @click="$emit('paging', 'next')"
    >
      <img src="~/assets/chevron.png" alt="next">
    </button>
  </div>
</template>

<script>
  export default {
    name: 'Paging',
    components: {
    },
    props: {
      page: Number,
      length: Number,
      current: Number
    },
    data () {
      return {

      }
    }
  }
</script>

<style lang="sass">
  .paging
    display: flex
    align-items: center
    justify-content: center
    margin-bottom: 40px
    &__items
      margin: 0 10px
      display: flex
    &__item
      font-family: "Proxima Nova - Semibold"
      font-size: 16px
      font-weight: 400
      line-height: 20px
      margin-right: 20px
      text-decoration: none
      position: relative
      padding: 5px
      cursor: pointer
      background-color: #000000
      color: #ffffff
      border-radius: 5px
      border: none
      height: 30px
      min-width: 30px
      &:last-child
        margin-right: 0
      &.is-active
        background-color: cornflowerblue
    &__prev, &__next
      display: flex
      justify-content: center
      align-items: center
      width: 29px
      height: 29px
      background-color: #111111
      box-sizing: border-box
      border-radius: 5px
      position: relative
      border: none
      img
        max-width: 10px
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        line-height: 1
      &.is-disabled
        opacity: 0.5
    &__next
      img
        transform: translate(-50%, -50%) rotate(180deg)
</style>
