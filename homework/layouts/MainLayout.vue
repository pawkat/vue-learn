<template>
  <div>
    <header class="header">
      <div class="header__wrapper wrapper">
        <nuxt-link to="/" class="logo">Classic</nuxt-link>
        <div class="nav">
          <nuxt-link to="/" class="nav__item"><img src="~/assets/home-icon.png" alt="home"></nuxt-link>
          <nuxt-link to="about" class="nav__item">About</nuxt-link>
          <nuxt-link to="tabs" class="nav__item">Tabs</nuxt-link>
          <nuxt-link to="todo" class="nav__item">TODO</nuxt-link>
        </div>
      </div>
    </header>
    <nuxt/>
    <footer class="footer">
      <div class="footer__wrapper wrapper">
        <div class="footer-nav">
          <nuxt-link to="/" class="footer-nav__item">Home</nuxt-link>
          <nuxt-link to="about" class="footer-nav__item">About</nuxt-link>
          <nuxt-link to="tabs" class="footer-nav__item">Tabs</nuxt-link>
          <nuxt-link to="todo" class="footer-nav__item">TODO</nuxt-link>
        </div>
        <div class="social">
          <a href="#" class="social__item"><img src="~/assets/twitter.png" alt=""></a>
          <a href="#" class="social__item"><img src="~/assets/facebook.png" alt=""></a>
          <a href="#" class="social__item"><img src="~/assets/pinterest.png" alt=""></a>
          <a href="#" class="social__item"><img src="~/assets/google-.png" alt=""></a>
        </div>
        <p>© Copyright 2013 DesignerFirst.com</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'MainLayout'
}
</script>

<style lang="sass">

.scale-enter-active, .scale-leave-active
  transition: all .7s
.scale-leave
  opacity: 1
.scale-leave-to
  opacity: 0
  transform: scale(.5)
.scale-leave-active
  position: absolute
.scale-enter
  opacity: 0
  transform: scale(.5)
.scale-enter-to
  opacity: 1
  transform: scale(1)
.scale-move
  transition: transform .7s

body
  margin: 0
  overflow-x: hidden
.header
  background-color: #111111
  padding: 10px 0
  margin-bottom: 30px
  &__wrapper
    display: flex
    justify-content: space-between
    align-items: center
    flex-direction: row
.wrapper
  max-width: 940px
  margin: 0 auto

.logo
  color: #ffffff
  font-family: "Proxima Nova - Extrabld"
  font-size: 24px
  font-weight: 400
  line-height: 41px
  text-decoration: none
.nav
  display: flex
  &__item
    color: #ffffff
    font-family: "Nexa Bold"
    font-size: 16px
    font-weight: 400
    line-height: 41px
    text-transform: uppercase
    text-decoration: none
    margin-right: 30px
    &:last-child
      margin-right: 0
.footer
  &__wrapper
    padding: 15px 0
    border-top: 1px solid #999999
    display: flex
    justify-content: space-around
    align-items: center
    flex-wrap: wrap
  &-nav
    display: flex
    &__item
      margin-right: 30px
      text-decoration: none
      color: #555555
      font-family: "Proxima Nova - Semibold"
      font-size: 14px
      font-weight: 400
      line-height: 22px
      letter-spacing: -0.35px
      &:last-child
        margin-right: 0
.social
  display: flex
  &__item
    width: 41px
    height: 41px
    background-color: #111111
    display: flex
    justify-content: center
    align-items: center
    border-radius: 50%
    margin-right: 10px
    &:last-child
      margin-right: 0
.h2
  color: #111111
  font-family: "Nexa Bold"
  font-size: 48px
  font-weight: 400
  line-height: 1.04
  letter-spacing: -1.2px
  margin: 0 auto 15px auto
  max-width: 710px
  padding: 0 10px
  box-sizing: border-box
  text-align: center
.underlined
  padding-bottom: 50px
  border-bottom: 1px solid #cccccc
  &:last-child
    border-bottom: none
.btn
  background-color: #000000
  color: #ffffff
  display: flex
  justify-content: center
  align-items: center
  padding: 10px
  border: none
  border-radius: 5px
  cursor: pointer
  transition: transform .3s ease
  &:hover
    cursor: pointer
  &:active
    transform: translateY(2px)

.form
  display: flex
  flex-direction: column
  width: 100%
  &__field
    height: 30px
    border: 1px solid #000000
    padding-left: 10px
    width: 100%
    margin-bottom: 20px
    box-sizing: border-box
    &:last-child
      margin-bottom: 0
.loader-wrap
  position: absolute
  top: 0
  left: -2%
  width: 104%
  height: 100%
  z-index: 1
  display: flex
  justify-content: center
  align-items: center
  border-radius: 5px
  &__bg
    background-color: rgba(0,0,0,.8)
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    filter: blur(5px)
.loader
  width: 120px
  height: 8px
  background-color: #ffffff
  overflow: hidden
  position: relative
  background-clip: padding-box
  &__first-bar, &__second-bar
    height: 100%
    border-radius: 2px
    background-color: #111111
    position: absolute
    overflow: hidden
    display: block
    will-change: left, right
    background-clip: padding-box
  &__first-bar
    animation: 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) 0s infinite normal none running firstBar
    -ms-animation: 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite normal firstBar
  &__second-bar
    animation: 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite normal none running secondBar
    -ms-animation: 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite normal secondBar
    -ms-animation-delay: 1.15s


@keyframes firstBar
  0%
    left: -35%
    right: 100%

  60%
    left: 100%
    right: -90%

  100%
    left: 100%
    right: -90%
@keyframes secondBar
  0%
    left: -200%
    right: 100%

  60%
    left: 107%
    right: -8%

  100%
    left: 107%
    right: -8%
</style>
