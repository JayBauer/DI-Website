<template lang="pug">
div.main-container
  div.parallax-bg
  nuxt
  main-footer
</template>
<script>
  import MainFooter from '~/components/MainFooter'
  export default {
    components: {
      MainFooter
    },
    middleware: 'getUser'
  }
</script>

<style lang="postcss">
@import 'global/variables';
@import 'global/reset';
@import 'global/defaults';
@import 'global/sticky-footer';
</style>
