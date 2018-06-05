<template>
  <div>
    <header class="header">
      <div class="header__wrapper wrapper">
        <nuxt-link to="/" class="logo">Classic</nuxt-link>
        <div class="nav">
          <nuxt-link to="/" class="nav__item"><img src="../assets/home-icon.png" alt="home"></nuxt-link>
          <nuxt-link to="about" class="nav__item">About</nuxt-link>
        </div>
      </div>
    </header>
    <nuxt/>
    <footer class="footer">
      <div class="footer__wrapper wrapper">
        <div class="footer-nav">
          <nuxt-link to="/" class="footer-nav__item">Home</nuxt-link>
          <nuxt-link to="about" class="footer-nav__item">About</nuxt-link>
        </div>
        <div class="social">
          <a href="#" class="social__item"><img src="../assets/twitter.png" alt=""></a>
          <a href="#" class="social__item"><img src="../assets/facebook.png" alt=""></a>
          <a href="#" class="social__item"><img src="../assets/pinterest.png" alt=""></a>
          <a href="#" class="social__item"><img src="../assets/google-.png" alt=""></a>
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
    justify-content: space-between
    align-items: center
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
  margin-bottom: 15px
  max-width: 710px
  padding: 0 10px
  box-sizing: border-box
  text-align: center
.underlined
  padding-bottom: 50px
  border-bottom: 1px solid #cccccc
  &:last-child
    border-bottom: none
.search
  margin-bottom: 10px
  padding: 10px
  min-width: 300px
</style>
