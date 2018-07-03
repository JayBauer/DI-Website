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
  import Cookies from 'js-cookie'
  import { ME } from '~/queries'
  import { USER_ID } from '~/constants'

  export default {
    components: {
      MainHeader,
      MainFooter
    },

    apollo: {
      me: {
        query: ME,
        result(data) {
          if(data.data.me) this.$store.commit('setName', data.data.me.firstName)
        },
        skip() {
          return this.skipQuery
        }
      }
    },
    mounted() {
      const userLogged = Cookies.get(USER_ID)
      if(userLogged) {
        this.$store.dispatch('setUser', userLogged)
        this.$apollo.queries.me.skip = false
        this.$apollo.queries.me.refetch()
      }
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
@import 'components/forms';
</style>
