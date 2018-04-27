<template lang="pug">
div.main-container
  div.parallax-bg
  nuxt
  main-footer
</template>
<script>
  import Cookies from 'js-cookie'
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
      MainFooter
    },
    middleware: 'getUser',
    transition: 'page'
  }
</script>

<style lang="postcss">
@import 'global/variables';
@import 'global/reset';
@import 'global/defaults';
@import 'global/sticky-footer';
</style>
