<template>
  <div id="gallery" class="bg-black">
    <q-carousel
      color="white"
      arrows
      autoplay
      infinite
      quick-nav
      height="97vh"
    >
      <q-carousel-slide v-for="(image, key) in imageNums"
          :key="key"
          :img-src='`"statics/gallery/img (${image}).jpg"`' />
    </q-carousel>
  </div>
</template>
<style lang="stylus" scoped>

</style>
<script>
import {galleryImageCount} from '../statics/data.json'
export default {
  created () {
    this.length = galleryImageCount
  },
  computed: {
    imageNums () {
      return Array.from({length: this.length}, (x, i) => i + 1)
    }
  }
}
</script>
