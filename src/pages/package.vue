<template>
  <q-page class="texture text-white q-pa-lg">
    <separator />
    <div class="header fit">
      <h1 class="text-center">{{info.name}}</h1>
      <h3 class="text-center">Prices start at {{info.priceStart}}</h3>
    </div>
    <separator />
    <div class="text-center">
      <h3>Inclusions or Amenities</h3>
      <li v-for="(item, index) in info.inclusions" :key="index">
        <q-icon name="stars" /> {{item}}
      </li>
    </div>
    <separator v-if="info.menuPackages" />
    <div style="full-width" v-if="info.menuPackages">
      <h3 class="text-center">Menu Packages</h3>
      <div class="row menu-packages text-center">
        <div v-for="(mp, index) in info.menuPackages" :key="index" class="col-xs-12 col-sm-6 col-md-4 q-pb-lg">
          <q-card inline style="width: 230px">
            <q-card-title>{{mp.name}}</q-card-title>
            <q-card-separator />
            <q-card-main>
              <li v-for="(item, iindex) in mp.items" :key="iindex" style="text-align: left">
                <q-icon name="check" /> {{item}}
              </li>
            </q-card-main>
          </q-card>
        </div>
      </div>
    </div>
    <separator />
    <div class="fit text-center">
      <h3>Terms and Conditions</h3>
      <li v-for="(term, index) in info.terms" :key="index" style="text-align: left">
        <q-icon name="check circle"/> {{term}}
      </li>
    </div>
    <separator v-if="info.freebies" />
    <div class="fit text-center" v-if="info.freebies">
      <h3>Freebies</h3>
      <p>*{{info.freebies.description}}</p>
      <li v-for="(item, index) in info.freebies.items" :key="index" style="text-align: center">
        <q-icon name="star"/> {{item}}
      </li>
    </div>
    <separator v-if="shouldShowMenuSelections" />
    <dishes v-if="shouldShowMenuSelections" />
  </q-page>
</template>
<script>
import separator from '../components/separator'
import dishes from '../components/selections'
import DATA from '../statics/data.json'
export default {
  components: {separator, dishes},
  created () {
    this.initialize()
  },
  data () {
    return {
      info: {}
    }
  },
  watch: {
    '$route': 'initialize'
  },
  methods: {
    initialize () {
      switch (this.$route.name) {
        case 'christening': this.info = DATA.packages[0]; break
        case 'birthday': this.info = DATA.packages[1]; break
        case 'party': this.info = DATA.packages[2]; break
        case 'debut': this.info = DATA.packages[3]; break
        case 'wedding':
        default: this.info = DATA.packages[4]
      }
    }
  },
  computed: {
    shouldShowMenuSelections () {
      return this.$route.name === 'debut' || this.$route.name === 'wedding'
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~variables'
li
  list-style-type none
h1
  font-size 7em
.texture
  background-color $brown-10
  background-image: repeating-linear-gradient(transparent, transparent 50px, rgba(0,0,0,.4) 50px, rgba(0,0,0,.4) 53px, transparent 53px, transparent 63px, rgba(0,0,0,.4) 63px, rgba(0,0,0,.4) 66px, transparent 66px, transparent 116px, rgba(0,0,0,.5) 116px, rgba(0,0,0,.5) 166px, rgba(255,255,255,.2) 166px, rgba(255,255,255,.2) 169px, rgba(0,0,0,.5) 169px, rgba(0,0,0,.5) 179px, rgba(255,255,255,.2) 179px, rgba(255,255,255,.2) 182px, rgba(0,0,0,.5) 182px, rgba(0,0,0,.5) 232px, transparent 232px),
  repeating-linear-gradient(270deg, transparent, transparent 50px, rgba(0,0,0,.4) 50px, rgba(0,0,0,.4) 53px, transparent 53px, transparent 63px, rgba(0,0,0,.4) 63px, rgba(0,0,0,.4) 66px, transparent 66px, transparent 116px, rgba(0,0,0,.5) 116px, rgba(0,0,0,.5) 166px, rgba(255,255,255,.2) 166px, rgba(255,255,255,.2) 169px, rgba(0,0,0,.5) 169px, rgba(0,0,0,.5) 179px, rgba(255,255,255,.2) 179px, rgba(255,255,255,.2) 182px, rgba(0,0,0,.5) 182px, rgba(0,0,0,.5) 232px, transparent 232px),
  repeating-linear-gradient(125deg, transparent, transparent 2px, rgba(0,0,0,.2) 2px, rgba(0,0,0,.2) 3px, transparent 3px, transparent 5px, rgba(0,0,0,.2) 5px);
.menu-packages
  margin 0 auto !important
/deep/ div.q-card
  background-color: $brown-5;
  background-image: radial-gradient(closest-side, transparent 98%, rgba(0,0,0,.3) 99%),
  radial-gradient(closest-side, transparent 98%, rgba(0,0,0,.3) 99%);
  background-size:80px 80px;
  background-position:0 0, 40px 40px;
</style>
