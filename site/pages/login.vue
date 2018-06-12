<template lang="pug">
  div
    section#login.login-page
      h1 Log In
      h4 Log in to your account and continue along the booking process.
      form.login-form(@submit.prevent="login")
        div.form-row.form-row--single
          TextInput(v-model="email" placeholder="Email Address" type="email")
        div.form-row.form-row--single
          TextInput(v-model="password" type="password" placeholder="Password")
        div.form-row
          div.error-message(v-show="formError")
            p {{ formError }}
          Button(id="login-btn" size="big" text="Log In" @click.native="login")
      h4 Don't have an account? #[nuxt-link(:to="{ name: 'signup' }") Create one here.]
</template>

<script>
  import gql from 'graphql-tag'
  import Cookie from 'js-cookie'
  import { LOGIN } from '~/mutations'
  import { USER_ID, AUTH_TOKEN } from '~/constants'

  export default {
    name: 'LogIn',
    data: () => ({
      email: '',
      password: '',
      formError: null
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
          this.$store.commit('login', { id, token })
          this.$router.push({ name: 'account-order-history' })
        }).catch(err => {
          if(err.graphQLErrors) {
            this.formError = err.message.replace('GraphQL error:', ' ').trim()
          }
          if(err.networkError) {
            this.formError = 'Unable to connect to server'
          }
        })
      }
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
  .form-row {
    position: relative;
    .error-message {
      position: absolute;
      width: 100%;
      color: $error;
      text-align: center;
    }
  }
</style>
