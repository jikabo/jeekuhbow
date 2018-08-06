<template>
  <div class="fit q-pb-lg">
    <h1 class="text-center">Menu Food Selections</h1>
    <div class="row text-center">
      <div v-for="(dish, index) in dishes" :key="index" class="dish col-xs-12 col-sm-6 col-md-6 q-pa-lg">
        <img :src="`statics/menu/${dish.image}`" width="200px" height="200px"/>
        <h2>{{dish.name}}</h2>
        <div>
          <li v-for="(menu, key) in dish.menus" :key="key">{{menu}}</li>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
h2
  padding 0
  margin 0
.dish
  width 200px
  img
    border 3px solid white
    border-radius 50%
li
  list-style-type none
</style>
<script>
export default {
  props: ['dishes']
}
</script>
