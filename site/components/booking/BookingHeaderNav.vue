<template lang='pug'>
  div.nav-wrapper(:style="`width: ${navWidth}px;`")
    nav(:style="`transform: translateX(-${offset}px);`")
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
      custom-svg(src="arrow.svg" :color="componentList[6].color" width="37" height="45")
      custom-svg(src="small-circle.svg" :color="componentList[6].circle" width="12" height="12")
      custom-svg(src="small-circle.svg" :color="componentList[6].color" width="12" height="12")
      custom-svg(src="small-circle.svg" :color="componentList[6].circle" width="12" height="12")
      custom-svg(src="money.svg" :color="componentList[7].color" width="56" height="34")
      custom-svg(src="small-circle.svg" :color="componentList[7].circle" width="12" height="12")
      custom-svg(src="small-circle.svg" :color="componentList[7].color" width="12" height="12")
      custom-svg(src="small-circle.svg" :color="componentList[7].circle" width="12" height="12")
      custom-svg(src="phone.svg" :color="componentList[8].color" width="43" height="44")
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'BookingHeaderNav',
    data: () => ({
      orange: '#F68938',
      blue: '#1D5480',
      white: '#FFF',
      offset: 0,
      navWidth: 600,
      componentList: [
        { comp: 'BookingFor', color: '#F68938', circle: '#FFF', width: 35, offset: 0 },
        { comp: 'Resident', color: '#F68938', circle: '#FFF', width: 42, offset: 105 },
        { comp: 'BodyParts', color: '#F68938', circle: '#FFF', width: 37, offset: 112 },
        { comp: 'Waiver', color: '#F68938', circle: '#FFF', width: 37, offset: 107 },
        { comp: 'LogIn', color: '#F68938', circle: '#FFF', width: 37, offset: 0 },
        { comp: 'SignUp', color: '#F68938', circle: '#FFF', width: 37, offset: 0 },
        { comp: 'Referral', color: '#F68938', circle: '#FFF', width: 56, offset: 107 },
        { comp: 'Payment', color: '#F68938', circle: '#FFF', width: 43, offset: 126 },
        { comp: 'ThankYou', color: '#F68938', circle: '#FFF', width: 43, offset: 67 }
      ]
    }),
    computed: {
      ...mapGetters({
        currentComponent: 'currentComponent'
      })
    },
    watch: {
      currentComponent() {
        this.changeStyles()
      }
    },
    mounted() {
      window.addEventListener('resize', () => { this.changeStyles() })
      this.$nextTick(function() {
        window.addEventListener('resize', () => { this.changeStyles() })
      })
    },
    beforeDestroy() {
      window.removeEventListener('resize', () => { this.changeStyles() })
    },
    methods: {
      changeStyles() {
        this.offset = 0
        for(var i = 0; i < this.componentList.length; i++) {
          this.componentList[i].color = this.orange
          this.componentList[i].circle = this.white
          if(this.componentList[i].comp == this.currentComponent) {
            for(var j = 0; j <= i; j++) {
              this.componentList[j].color = this.blue
              this.componentList[j].circle = this.blue
            }
          }
        }
        if(window.innerWidth <= 600) {
          for(var i = 0; i < this.componentList.length; i++) {
            if(this.componentList[i].comp == this.currentComponent) {
              for(var j = 0; j <= i; j++) {
                this.navWidth = this.componentList[j].width
                this.offset += this.componentList[j].offset
              }
            }
          }
        } else {
          this.navWidth = 600
        }
      }
    }
  }
</script>

<style lang="postcss" scoped>
  @import 'global/variables';

  .nav-wrapper {
    lost-center: 600px;
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-flow: row nowrap;
      width: 600px;
      min-width: 600px;
      padding: 50px * * *;
      button {
        outline: none;
      }
    }
    @media (--for-phone) {
      margin: 0 auto;
      overflow: hidden;
      nav {
        transition: transform 0.5s ease;
      }
    }
  }
</style>
