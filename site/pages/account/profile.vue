<template lang="pug">
  section#profile.account-page
    h4 This is your profile, you can change your information here if it is inaccurate.
    template(v-if="loading > 0")
      Preloader
    template(v-else)
      form.account-form.profile-form
        div.form-row
          TextInput(v-model="firstName" type="name" placeholder="First Name" @validate="value => valid.firstName = value")
          TextInput(v-model="lastName" type="name" placeholder="Last Name" @validate="value => valid.lastName = value")
        div.form-row
          TextInput(v-model="phone" type="phone" placeholder="Phone Number" @validate="value => valid.phone = value")
          TextInput(v-model="email" type="email" placeholder="Email Address" @validate="value => valid.email = value")
        div.form-row.form-row--single
          TextInput(v-model="address1" type="text" placeholder="Address" @validate="value => valid.address = value")
        div.form-row.form-row--single
          TextInput(v-model="address2" type="text" placeholder="Address Line 2")
        div.form-row
          TextInput(v-model="city" type="text" placeholder="City" @validate="value => valid.city = value")
          TextInput(v-model="province" type="text" placeholder="Province" @validate="value => valid.province = value")
        div.form-row
          TextInput(v-model="postal" type="postal" placeholder="Postal Code" @validate="value => valid.postal = value")
        div.form-row
          Button(id="save-profile-btn" size="big" text="Save" @click.native="saveUser")

      h4 Change Password
      form.account-form.password-form
        div.form-row
          TextInput(v-model="oldPassword" type="password" placeholder="Old Password")
          TextInput(v-model="newPassword" type="password" placeholder="New Password" @validate="value => validPass.password = value")
          TextInput(v-model="confirmPassword" type="password" placeholder="Confirm Password" @validate="value => validPass.passwordConfirm = value")
        div.form-row
          Button(id="update-pass-btn" size="big" text="update" @click.native="updatePassword")
</template>

<script>
  import bcrypt from 'bcryptjs'
  import { ME } from '~/queries'
  import { UPDATE_USER, UPDATE_PASSWORD } from '~/mutations'

  export default {
    name: 'Profile',
    data: () => ({
      me: {},
      loading: 0,
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      address1: '',
      address2: '',
      city: '',
      province: '',
      postal: '',
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
      valid: {
        firstName: false,
        lastName: false,
        phone: false,
        email: false,
        address: false,
        city: false,
        province: false,
        postal: false,
      },
      validPass: {
        password: false,
        passwordConfirm: false
      }
    }),

    middleware: 'auth',

    apollo: {
      me: {
        query: ME,
        loadingKey: 'loading',
        result(data) {
          return this.setUserData()
        }
      }
    },

    methods: {
      setUserData() {
        this.firstName = this.me.firstName
        this.lastName = this.me.lastName
        this.phone = this.me.phone
        this.email = this.me.email
        this.address1 = this.me.address1
        this.address2 = this.me.address2
        this.city = this.me.city
        this.province = this.me.province
        this.postal = this.me.postal
      },

      saveUser() {
        const { firstName, lastName, phone, email, address1, address2, city, province, postal } = this.$data

        if (
          this.valid.firstName &&
          this.valid.lastName &&
          this.valid.phone &&
          this.valid.email &&
          this.valid.address &&
          this.valid.city &&
          this.valid.province &&
          this.valid.postal
        ) {
          this.$apollo.mutate({
            mutation: UPDATE_USER,
            variables: {
              id: this.me.id,
              firstName,
              lastName,
              phone,
              email,
              address1,
              address2,
              city,
              province,
              postal
            }
          }).then(res => {
            this.$apollo.queries.me.refetch()
            this.$router.push({ name: 'account-order-history' })
          }).catch(err => {
            console.log(err)
          })
        }
      },

      async updatePassword() {
        const { oldPassword, newPassword, confirmPassword } = this.$data
        const oldPassCheck = await bcrypt.compareSync(oldPassword, this.me.password)

        if (oldPassCheck && newPassword == confirmPassword && (this.validPass.password && this.validPass.passwordConfirm)) {
          this.$apollo.mutate({
            mutation: UPDATE_PASSWORD,
            variables: {
              id: this.me.id,
              password: newPassword
            }
          }).then(res => {
            this.$apollo.queries.me.refetch()
            this.$router.push({ name: 'account-order-history' })
          }).catch(err => {
            console.log(err)
          })
        }
      }
    }
  }
</script>

<style lang="postcss">
  #profile {
    padding: 0 * * *;
    form.profile-form {
      padding: 30px;
    }
    form.password-form {
      padding: 30px;
      .form-input {
        lost-column: 1/3;
      }
    }
  }
</style>
