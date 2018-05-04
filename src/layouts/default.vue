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
          <transition-group
            appear
            mode="out-in"
            enter-active-class="animated lightSpeedIn"
            leave-active-class="animated lightSpeedOut">
          <q-item :key="1">
            <q-item-main>
              <div @click="clickHome()" class="nav q-display-1 right text-brown-6">Home</div>
            </q-item-main>
          </q-item>
          <q-item v-if="shouldShowLink" :key="2">
            <q-item-main>
              <div @click="scrollToSection('gallery')" class="nav q-display-1 right text-brown-6">Gallery</div>
            </q-item-main>
          </q-item>
          <q-item v-if="shouldShowLink" :key="3">
            <q-item-main>
              <div @click="scrollToSection('about')" class="nav q-display-1 right text-brown-6">About Us</div>
            </q-item-main>
          </q-item>
          <q-item v-if="shouldShowLink" :key="4">
            <q-item-main>
              <div @click="scrollToSection('contact')" class="nav q-display-1 right text-brown-6">Contacts</div>
            </q-item-main>
          </q-item>
          </transition-group>
        </q-list>
      </div>
      <div class="col-3">
          <q-list
          no-border
          inset-delimiter
        >
          <q-item class="package-link">
            <q-btn
              square
              icon="child care"
              color="red-10"
              size="xl"
              class="full-width"
              @click="$router.push('/christening')"
              />
          </q-item>
          <q-item class="package-link">
            <q-btn
              square
              icon="cake"
              color="red"
              size="xl"
              class="full-width"
              @click="$router.push('/birthday')"
              />
          </q-item>
          <q-item class="package-link">
            <q-btn
              square
              icon="spa"
              color="deep-orange-10"
              size="xl"
              class="full-width"
              @click="$router.push('/debut')"
              />
          </q-item>
          <q-item class="package-link">
            <q-btn
              square
              icon="whatshot"
              color="deep-orange"
              size="xl"
              class="full-width"
              @click="$router.push('/wedding')"
              />
          </q-item>
        </q-list>
      </div>
    </div>
    </q-layout-drawer>

    <q-page-container>
      <transition mode="out-in" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <router-view :key="$route.fullPath"/>
      </transition>
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
  computed: {
    shouldShowLink () {
      return this.$route.name === 'index'
    }
  },
  methods: {
    scrollToSection (sectionId) {
      const targetElement = document.getElementById(sectionId)
      const scrollTarget = getScrollTarget(targetElement)
      const offset = targetElement.offsetTop - targetElement.scrollHeight
      const bugOffset = sectionId === 'about' ? 800 : 650
      setScrollPosition(scrollTarget, offset + bugOffset, 1000)
    },
    clickHome () {
      if (this.$route.name !== 'index') {
        this.$router.push('/')
      }
      this.scrollToSection('home')
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
  font-family 'Tangerine', 'Lucida', sans
  font-size 3em
  &:hover
    color white !important
    font-style italic
</style>
