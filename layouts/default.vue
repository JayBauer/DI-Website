<template lang="pug">
div.main-container
  div.parallax-bg
  nuxt
  main-footer
</template>
<script>
  import MainFooter from '~/components/MainFooter'
  import { ME } from '~/queries'
  
  export default {
    data: () => ({
      me: {},
    }),
    apollo: {
      me: {
        query: ME,
        loadingKey: 'loading',
        result(data) {
          this.$store.dispatch('updateName', this.me.firstName)
        }
      }
    },
    beforeUpdate() {
      this.$apollo.queries.me.refetch()
    },
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
