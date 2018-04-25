<template lang="pug">
  div
    main-header

    section#login.login-page
      h1 Log In
      h4 Log in to your account and continue along the booking process.
      form.login-form(@submit.prevent="login")
        div.form-row.form-row--single
          TextInput(v-model="email" placeholder="Email Address")
        div.form-row.form-row--single
          TextInput(v-model="password" type="password" placeholder="Password")
        div.form-row
          Button(id="login-btn" classes="btn-big" text="Log In")
      h4 Don't have an account? #[nuxt-link(:to="{ name: 'signup' }") Create one here.]
</template>

<script>
  import gql from 'graphql-tag'
  import Cookies from 'js-cookie'
  import { LOGIN } from '~/mutations'
  import { USER_ID, AUTH_TOKEN } from '~/constants'
  import MainHeader from '~/components/MainHeader'

  export default {
    name: 'LogIn',
    data: () => ({
      email: '',
      password: '',
      loggedIn: false
    }),

    methods: {
      login() {
        const { email, password } = this.$data

        this.email = ''
        this.password = ''

        this.$apollo.mutate({
          mutation: LOGIN,
          variables: {
            email,
            password,
          }
        }).then(res => {
          const token = res.data.login.token
          const id = res.data.login.user.id
          this.loggedIn = true
          this.saveUserLogin(id, token)
          this.$router.push({ name: 'account-order-history' })
        }).catch(err => {
          console.log(err)
        })
      },

      saveUserLogin(id, token) {
        Cookies.set(USER_ID, id, { expires: 7 })
        Cookies.set(AUTH_TOKEN, token, { expires: 7 })
      }
    },
    components: {
      MainHeader
    },
    head() {
      return {
        title: 'Log In'
      }
    }
  }
</script>

<style lang="postcss">
  @import 'global/variables';
  @import 'components/forms';

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
    .btn-big {
      margin: 50px * 30px;
    }
    &#login {
      form.login-form {
        .form-row {
          lost-center: 450px;
        }
      }
    }
  }
</style>
