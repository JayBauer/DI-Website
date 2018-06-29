<template lang="pug">
  div#quote-box.quote-box(:class="scrolled" @scroll="handleScroll")
    div.quote-box__top
      h1 Quote:
      div.quote-box__cost
        h4 Cost: ${{ price }}
        h4 Discount: -${{ discount }}
        h4 Total: ${{ price - discount }}
      h4 Check multiple body parts if applicable, multiple body part discounts will apply.
    div.quote-box__bottom
      button(@click="next" disabled="disabled")
        custom-svg(src="next-btn.svg" color="#F68938" width="86" height="85")
        h4 Next
</template>

<script>
  import Button from '~/components/shared/Button'

  export default {
    name: 'Quote',
    props: ['price', 'discount'],
    data: () => ({
      scrolled: ''
    }),
    methods: {
      handleScroll() {
        if(window.scrollY > 650) {
          this.scrolled = 'fixed'
        } else {
          this.scrolled = ''
        }
      },
      next() {
        this.$store.dispatch('updateComponent', 'Waiver')
      }
    },
    beforeMount () {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.handleScroll);
    },
    components: {
      Button
    }
  }
</script>

<style lang="postcss">
  @import 'global/variables';

  .quote-box {
    background-color: $blue;
    @media (--for-tablet-land-up) {
      position: absolute;
      top: 650px;
      right: 0;
      width: 266px;
      &.fixed {
        position: fixed;
        top: 0;
      }
    }
    @media (--nav-menu-down) {
      top: 600px;
    }
    .quote-box__top {
      padding: 30px * 50px;
      lost-center: 180px;
      h1 {
        color: $white;
      }
      h4 {
        justify-content: flex-start;
        font-size: 20px;
        font-weight: light;
        text-align: left;
        color: $white;
      }
      .quote-box__cost {
        padding: 40px *;
        h4 {
          font-weight: bold;
          color: $orange;
          padding: * * 0 *;
        }
      }
    }
    .quote-box__bottom {
      display: flex;
      justify-content: center;
      padding: 25px *;
      background-color: $white;
      border: 3px solid $blue;
      @media (--for-tablet-land-down) {
        display: none;
      }
    }
  }
</style>
