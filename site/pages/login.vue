<template lang="pug">
  div
    section#login.login-page
      h1 Log In
      h4 Log in to your account and continue along the booking process.
      LogIn(@loggedIn="value => { if(value) $router.push({ name: 'account-order-history' }) }")
      h4 Don't have an account? #[nuxt-link(:to="{ name: 'signup' }") Create one here.]
</template>

<script>
  import LogIn from '~/components/account/LogIn'

  export default {
    name: 'LoginPage',
    head() {
      return {
        title: 'Log In'
      }
    },
    components: {
      LogIn
    }
  }
</script>

<style lang="postcss">
  @import 'global/variables';

  section.login-page {
    padding: * 30px;
    background-color: $white;
    h4 {
      max-width: 600px;
      margin: 0 auto;
      padding: 50px 0;
      text-align: center;
      font-weight: light;
      a {
        font-weight: medium;
        color: $blue;
      }
    }
  }
</style>
