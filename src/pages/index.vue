<template>
  <q-page>
    <q-parallax src="statics/homebg.jpg" :height="700" id="home">
      <p class="header-quote text-italic q-display-3 float-right">
        “Pull up a chair. Take a taste. Come join us. Life is so endlessly delicious.”
        <br /><span class="q-display-2">- Ruth Reichl</span>
      </p>
    </q-parallax>
    <gallery />
    <about />
    <contact />
      <packages />
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
</style>
<script>
import packages from '../components/packages'
import gallery from '../components/gallery'
import about from '../components/about'
import contact from '../components/contact'
export default {
  name: 'PageIndex',
  components: {packages, gallery, about, contact}
}
</script>
