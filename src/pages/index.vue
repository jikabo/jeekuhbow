<template>
  <q-page style="height: 100vh">
    <div id="home" class="full-page-bg">
      <p class="header-quote text-italic">
        “Pull up a chair. Take a taste. Come join us. Life is so endlessly delicious.”
        <br /><span class="q-display-2">- Ruth Reichl</span>
      </p>
    </div>
    <gallery />
    <div class="text-center q-mt-xl ab-divider">
      <img src="~assets/divider.png"/>
    </div>
    <about />
    <separator />
    <contact />
    <q-page-sticky position="top-right" :offset="[0, 500]">
      <a
        v-back-to-top.animate="1000"
        class="animate-pop play-backtotop non-selectable shadow-2"
      >
        Back to top
      </a>
    </q-page-sticky>
  </q-page>
</template>
<style lang="stylus" scoped>
@import '~variables'
.full-page-bg {
  background url('/statics/homebg.jpg') no-repeat center center fixed
  background-size cover
  -webkit-background-size cover
  -mox-background-size cover
  -o-background-size cover
  width: 100%;
  height: 700px;
}
#home::after {
  content "";
  display table
  clear both
}
.play-backtotop
  color white
  padding 15px
  background-color $brown-8
  border-radius 15px 0px 0px 15px
  cursor pointer
.header-quote
  max-width 1000px
  font-family 'Helvetica Neue'
  text-align right
  color white
  text-shadow 2px 2px #ff5722
  font-size 4rem
  padding 3rem
.ab-divider
  margin-top 150px
</style>
<script>
import gallery from '../components/gallery'
import about from '../components/about'
import contact from '../components/contact'
import separator from '../components/separator'
export default {
  name: 'PageIndex',
  components: {gallery, about, contact, separator}
}
</script>
