<template lang='pug'>
  nav.booking-nav
    button(@click="onClick(0)")
      img(src="/img/airplane.svg")
    button(@click="onClick(1)")
      img(src="/img/results-orange.svg")
    button(@click="onClick(2)")
      img(src="/img/results-orange.svg")
    button(@click="onClick(3)")
      img(src="/img/results-orange.svg")
    button(@click="onClick(4)")
      img(src="/img/results-orange.svg")
    button(@click="onClick(5)")
      img(src="/img/results-orange.svg")
</template>

<script>
  export default {
    name: 'QuizHeaderNav',
    methods: {
      onClick(e) {
        this.$emit('clicked', e)
      }
    }
  }
</script>

<style lang="postcss">
  @import 'global/variables';

  nav.booking-nav {
    lost-center: 600px;
    justify-content: space-between;
    padding: 50px * * *;
    button {
      outline: none;
    }
  }
</style>
