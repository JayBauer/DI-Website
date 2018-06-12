<template lang='pug'>
  div
    section#signup.login-page
      h1 Create Account
      h4 Create an account here to save your quote and continue along the booking process.
      form(@submit.prevent='signup')
        div.form-row
          TextInput(v-model="firstName" placeholder="First Name" type="name")
          TextInput(v-model="lastName" placeholder="Last Name" type="name")
        div.form-row
          TextInput(v-model="phone" placeholder="Phone Number" type="phone")
          TextInput(v-model="email" placeholder="Email Address" type="email")
        div.form-row.form-row--single
          TextInput(v-model="address1" placeholder="Address" type="text")
        div.form-row.form-row--single
          TextInput(v-model="address2" placeholder="Address Line 2" type="text")
        div.form-row
          TextInput(v-model="city" placeholder="City" type="text")
          TextInput(v-model="province" placeholder="Province" type="text")
        div.form-row
          TextInput(v-model="postal" placeholder="Postal Code" type="postal")
        div.form-row
          TextInput(v-model="password" placeholder="Password" type="password")
          TextInput(v-model="passwordConfirm" placeholder="Confirm Password" type="password")
        div.form-row
          Button(id="signup-btn" size="big" text="Create Account")
      h4 Already have an account? #[nuxt-link(:to="{ name: 'login' }") Log in here.]
</template>

<script>
  import { SIGNUP } from '~/mutations'

  export default {
    name: 'SignUp',

    data () {
      return {
        email: '',
        password: '',
        passwordConfirm: '',
        firstName: '',
        lastName: '',
        phone: '',
        address1: '',
        address2: '',
        city: '',
        province: '',
        postal: ''
      }
    },

    methods: {
      signup() {
        const { email, password, firstName, lastName, phone, address1, address2, city, province, postal } = this.$data
        this.$apollo.mutate({
          mutation: SIGNUP,
          variables: {
            email,
            password,
            firstName,
            lastName,
            phone,
            address1,
            address2,
            city,
            province,
            postal
          }
        }).then(res => {
          this.$router.push({ name: 'login' })
        }).catch(err => {
          console.log(err)
        })
      }
    },

    head() {
      return {
        title: 'Sign Up'
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
  }
</style>
