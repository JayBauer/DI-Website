<template lang="pug">
  form.login-form(@submit.prevent="login")
    div.form-row.form-row--single
      TextInput(v-model="email" placeholder="Email Address" type="email")
    div.form-row.form-row--single
      TextInput(v-model="password" type="password" placeholder="Password")
    div.form-row
      div.error-message(v-show="formError")
        p {{ formError }}
      Button(id="login-btn" size="big" text="Log In" @click.native="login")
</template>

<script>
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

        this.$apollo.mutate({
          mutation: LOGIN,
          variables: {
            email,
            password,
          }
        }).then(res => {
          const { token } = res.data.login
          const { id, firstName } = res.data.login.user
          this.$store.commit('login', { id, token })
          this.$store.commit('setName', firstName)
          this.$emit('loggedIn', true)
        }).catch(err => {
          if(err.graphQLErrors) {
            this.formError = err.message.replace('GraphQL error:', ' ').trim()
          }
          if(err.networkError) {
            this.formError = 'Unable to connect to server'
          }
          this.$emit('loggedIn', false)
        })
      }
    },
  }
</script>

<style lang="postcss">
  @import 'global/variables';

  form.login-form {
    .form-row {
      lost-center: 450px;
      position: relative;
      .error-message {
        position: absolute;
        width: 100%;
        color: $error;
        text-align: center;
      }
    }
    .btn-big {
      margin: 50px * 30px;
    }
  }
</style>
