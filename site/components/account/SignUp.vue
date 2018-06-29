<template lang="pug">
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
      Button(id="signup-btn" size="big" text="Create Account" @click.native="signup")
</template>

<script>
  import { SIGNUP } from '~/mutations'

  export default {
    name: 'SignUp',
    data: () => ({
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
    }),

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
          this.$emit('signedUp', true)
        }).catch(err => {
          console.log(err)
          this.$emit('signedUp', false)
        })
      }
    },
  }
</script>

<style scoped>
  .btn-big {
    margin: 50px * 30px;
  }
</style>
