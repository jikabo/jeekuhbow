<template>
  <q-modal
    v-model="opened"
    :content-classes="['bg-grey-10', 'q-pa-lg']"
    :content-css="{minWidth: '90vw', color: 'white'}">
    <p class="q-display-2">Debut Package</p>
    <p class="q-headline">Debut packages for a minimum of 100 persons include the following:</p>
    <ul>
      <li>Menu of choices</li>
      <li>Debutant Chair</li>
      <li>18 Roses</li>
      <li>18 Candles w/ special stand</li>
      <li>Decorated cake & gift table</li>
      <li>Red carpet</li>
      <li>2 layered sugar coated cake ( FREE for menu worth of 400/Head and UP)</li>
      <li>Arch Balloon for the entrance</li>
      <li>Personalized tarpaulin (2x6 ft.)</li>
      <li>Floral center piece w/ candle for guest table</li>
      <li>Impressive buffet table w/ set up & center piece</li>
      <li>Motif color subject for availability</li>
      <li>Elegant dressed up mono block chair w/ ribbon</li>
      <li>Decorated gift & cake table w/ skirting</li>
      <li>All silverware & glassware</li>
      <li>Cordial & uniformed waiter</li>
      <li>Mineral water & tube ice</li>
      <li>Bottomless ice tea</li>
    </ul>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
  </q-modal>
</template>
<style lang="stylus" scoped>

</style>
<script>
export default {
  data () {
    return {
      opened: false
    }
  },
  methods: {
    open () {
      this.opened = true
    }
  }
}
</script>
