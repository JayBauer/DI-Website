<template lang='pug'>
  nav
    custom-svg(src="head.svg" :color="componentList[1].color" width="35" height="45")
    custom-svg(src="small-circle.svg" :color="componentList[1].circle" width="12" height="12")
    custom-svg(src="small-circle.svg" :color="componentList[1].color" width="12" height="12")
    custom-svg(src="small-circle.svg" :color="componentList[1].circle" width="12" height="12")
    custom-svg(src="shock.svg" :color="componentList[2].color" width="42" height="44")
    custom-svg(src="small-circle.svg" :color="componentList[2].circle" width="12" height="12")
    custom-svg(src="small-circle.svg" :color="componentList[2].color" width="12" height="12")
    custom-svg(src="small-circle.svg" :color="componentList[2].circle" width="12" height="12")
    custom-svg(src="pencil.svg" :color="componentList[3].color" width="37" height="46")
    custom-svg(src="small-circle.svg" :color="componentList[3].circle" width="12" height="12")
    custom-svg(src="small-circle.svg" :color="componentList[3].color" width="12" height="12")
    custom-svg(src="small-circle.svg" :color="componentList[3].circle" width="12" height="12")
    custom-svg(src="arrow.svg" :color="componentList[4].color" width="37" height="45")
    custom-svg(src="small-circle.svg" :color="componentList[4].circle" width="12" height="12")
    custom-svg(src="small-circle.svg" :color="componentList[4].color" width="12" height="12")
    custom-svg(src="small-circle.svg" :color="componentList[4].circle" width="12" height="12")
    custom-svg(src="money.svg" :color="componentList[5].color" width="56" height="34")
    custom-svg(src="small-circle.svg" :color="componentList[5].circle" width="12" height="12")
    custom-svg(src="small-circle.svg" :color="componentList[5].color" width="12" height="12")
    custom-svg(src="small-circle.svg" :color="componentList[5].circle" width="12" height="12")
    custom-svg(src="phone.svg" :color="componentList[6].color" width="43" height="44")
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'BookingHeaderNav',
    data: () => ({
      orange: '#F68938',
      blue: '#1D5480',
      white: '#FFF',
      componentList: [
        { comp: 'BookingFor', color: '#F68938', circle: '#FFF' },
        { comp: 'Resident', color: '#F68938', circle: '#FFF' },
        { comp: 'BodyParts', color: '#F68938', circle: '#FFF' },
        { comp: 'Waiver', color: '#F68938', circle: '#FFF' },
        { comp: 'Referral', color: '#F68938', circle: '#FFF' },
        { comp: 'Payment', color: '#F68938', circle: '#FFF' },
        { comp: 'ThankYou', color: '#F68938', circle: '#FFF' }
      ]
    }),
    computed: {
      ...mapGetters({
        currentComponent: 'currentComponent'
      })
    },
    watch: {
      currentComponent() {
          for(var i = 0; i < this.componentList.length; i++) {
            if(this.componentList[i].comp == this.currentComponent) {
              for(var j = 0; j <= i; j++) {
                this.componentList[j].color = this.blue
                this.componentList[j].circle = this.blue
              }
            }
          }
      }
    }
  }
</script>

<style lang="postcss" scoped>
  @import 'global/variables';

  nav {
    lost-center: 600px;
    justify-content: space-between;
    align-items: center;
    padding: 50px * * *;
    button {
      outline: none;
    }
  }
</style>
