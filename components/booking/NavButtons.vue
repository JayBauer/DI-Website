<template lang="pug">
  section#booking-nav.booking-page
    nav
      button(v-if="previous >= 0" @click="onClick(previous)")
        img(src="/img/back-btn.svg")
        h4 Back
      button(v-if="next <= 5" @click="onClick(next)")
        img(src="/img/next-btn.svg")
        h4 Next
</template>
<script>
export default {
  name: 'NavButtons',
  props: ['next', 'previous'],
  methods: {
    onClick(e) {
      this.$emit('clicked', e)
    }
  }
}
</script>

<style lang="postcss">
  @import 'global/variables';

  section#booking-nav {
    nav {
      lost-center: 300px;
      justify-content: space-around;
      button {
        outline: none;
        h4 {
          font-size: 20px;
          font-weight: bold;
          color: $blue;
          text-transform: uppercase;
          padding: 10px * * *;
        }
      }
    }
  }
</style>
