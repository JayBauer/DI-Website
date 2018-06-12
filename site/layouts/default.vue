<template lang="pug">
div.main-container
  div.parallax-bg
  main-header
  nuxt
  main-footer
</template>
<script>
  import MainHeader from '~/components/MainHeader'
  import MainFooter from '~/components/MainFooter'

  export default {
    components: {
      MainHeader,
      MainFooter
    }
  }
</script>

<style lang="postcss">
@import 'global/fonts';
@import 'global/variables';
@import 'global/reset';
@import 'global/defaults';
@import 'global/sticky-footer';
@import 'global/transitions';
</style>
