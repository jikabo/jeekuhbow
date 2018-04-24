<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="grey-10"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title v-if="!leftDrawerOpen" class="text-center">
          JiKaBo Catering Services
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      content-class="bg-grey-10"
    >
    <div class="q-py-lg text-center">
      <img alt="Jikabo logo" src="~assets/logo.png">
    </div>
    <div class="row">
      <div class="col-9">
        <q-list no-border>
          <q-item>
            <q-item-main>
              <div @click="scrollToSection('home')" class="nav q-display-1 right text-brown-6">Home</div>
            </q-item-main>
          </q-item>
          <q-item>
            <q-item-main>
              <div @click="scrollToSection('gallery')" class="nav q-display-1 right text-brown-6">Gallery</div>
            </q-item-main>
          </q-item>
          <q-item>
            <q-item-main>
              <div @click="scrollToSection('about')" class="nav q-display-1 right text-brown-6">About Us</div>
            </q-item-main>
          </q-item>
          <q-item>
            <q-item-main>
              <div @click="scrollToSection('contact')" class="nav q-display-1 right text-brown-6">Contacts</div>
            </q-item-main>
          </q-item>
        </q-list>
      </div>
      <div class="col-3">
          <q-list
          no-border
          inset-delimiter
        >
          <q-item class="package-link">
            <q-btn square icon="child care" color="red-10" size="xl" class="full-width"/>
          </q-item>
          <q-item class="package-link">
            <q-btn square icon="spa" color="deep-orange-10" size="xl" class="full-width"/>
          </q-item>
          <q-item class="package-link">
            <q-btn square icon="cake" color="red" size="xl" class="full-width"/>
          </q-item>
          <q-item class="package-link">
            <q-btn square icon="whatshot" color="deep-orange" size="xl" class="full-width"/>
          </q-item>
        </q-list>
      </div>
    </div>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll
export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    scrollToSection (sectionId) {
      const targetElement = document.getElementById(sectionId)
      const scrollTarget = getScrollTarget(targetElement)
      const offset = targetElement.offsetTop - targetElement.scrollHeight
      const bugOffset = sectionId === 'about' ? 800 : 650
      setScrollPosition(scrollTarget, offset + bugOffset, 1000)
    }
  }
}
</script>

<style lang="stylus" scoped>
.q-layout-header
  box-shadow 0
.right
  text-align right
.package-link
  padding 0
  button
    border-radius 0
.nav
  cursor pointer
  &:hover
    color white !important
    font-style italic
</style>
