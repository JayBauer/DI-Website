<template lang="pug">
  div.preloader
    h4 Loading...
    //- transition(name="preloader")
    //- semipolar-spinner.preloader__image(:animation-duration="2000" :size="65" :color="'#FF1D5E'")
      //- div.semipolar-spinner
      //-   div.ring
      //-   div.ring
      //-   div.ring
      //-   div.ring
      //-   div.ring
</template>

<script>
  // import { SemipolarSpinner } from 'epic-spinners'

  export default {
    name: 'Preloader'
  }
</script>

<style lang="postcss" scoped>
  @import 'global/variables';
</style>
