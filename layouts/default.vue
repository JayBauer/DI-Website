<template lang="pug">
div.main-container
  div.parallax-bg
  main-header
  nuxt
  main-footer
</template>
<script>
  import Cookies from 'js-cookie'
  import MainHeader from '~/components/MainHeader'
  import MainFooter from '~/components/MainFooter'
  import { ME } from '~/queries'
  import { USER_ID, AUTH_TOKEN } from '~/constants'

  export default {
    data: () => ({
      me: {}
    }),
    apollo: {
      me: {
        query: ME,
        loadingKey: 'loading',
        error(err) {
          console.log('User login invalid!')
          Cookies.remove(USER_ID)
          Cookies.remove(AUTH_TOKEN)
          this.$apolloProvider.defaultClient.resetStore()
        },
        result(data) {
          this.$store.dispatch('updateName', this.me.firstName)
        }
      }
    },
    components: {
      MainHeader,
      MainFooter
    },
    middleware: 'getUser'
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
