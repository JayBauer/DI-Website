<template lang="pug">
  div
    section#contact.contact-page
      h1 Contact
      form#contact-form.contact-form
        div.form-row
          TextInput(v-model="firstName" type='text' placeholder='First Name' @validate="value => valid.firstName = value")
          TextInput(v-model="lastName" type='text' placeholder='Last Name' @validate="value => valid.lastName = value")
        div.form-row
          TextInput(v-model="phone" type='text' placeholder='Phone Number' @validate="value => valid.phone = value")
          TextInput(v-model="email" type='text' placeholder='Email Address' @validate="value => valid.email = value")
        div.form-row.form-row--single.form-input
          textarea(v-model="message" name='message' placeholder='Message' form='contact-form')
        div.form-row.complete-error
          transition(name="error")
            template(v-if="!!success")
              h4 {{ success }}
        div.form-row
          Button(id="submit-btn" size="big" text="Submit" @click.native="sendEmail")

    section#book-now.contact-page
      h1 Book Now
      h4 Get Results back in two weeks.
      Button(id="book-now-btn" size="big" text="Book A Scan" :link="{ name: 'booking-id', params: { id: 'new' } }")
    location.contact-page
</template>

<script>
  import axios from 'axios'
  import Location from '~/components/main/Location'

  export default {
    name: 'Contact',
    components: {
      Location
    },
    data: () => ({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      message: '',
      success: '',
      valid: {
        phone: false,
        email: false
      }
    }),
    methods: {
      sendEmail() {
        const { firstName, lastName, phone, email, message } = this.$data
        console.log('START')
        if (!!firstName && !!lastName && !!phone && !!email && !!message && this.valid.phone && this.valid.email) {
          this.firstName = ''
          this.lastName = ''
          this.phone = ''
          this.email = ''
          this.message = ''
          this.success = ''
          axios.post(`${process.env.SERVER_IP}:${process.env.SERVER_PORT}/send`, { firstName, lastName, email, phone, message })
          .then((res) => {
            this.success = 'Your message has been sent. Thank you for your inquiry.'
            console.log(this.success)
          })
          .catch((err) => {
            console.log(err)
            this.success = 'There was a problem sending your inquiry. Please try again.'
            console.log(this.success)
          })
        } else {
          console.log('NOPE')
          this.success = 'Please fill out all fields.'
        }
      }
    },
    head() {
      return {
        title: 'Contact Us'
      }
    }
  }
</script>

<style lang="postcss">
  @import 'global/variables';

  section.contact-page {
    &#contact {
      h1 {
        color: $white;
        padding: * * 50px *;
      }
      .contact-form {
        .form-row {
          input, textarea {
            color: $white;
            border-color: $white;
            background-color: rgba(#7b89a9, 0.38);
            &::placeholder {
              color: $white;
              opacity: 1;
            }
          }
          textarea {
            height: 275px;
            margin: * * 50px *;
          }
        }
        .complete-error {
          position: relative;
          top: -30px;
          height: 10px;
          h4 {
            color: $white;
            padding: 0 !important;
            text-align: center;
            margin: 0 auto;
          }
        }
      }
      @media (--for-phone) {
        h1 {
          font-size: 36px/36px;
          padding: 30px 0;
        }
      }
    }
    &#book-now {
      padding: 75px 0;
      background-color: $off-white;
      text-align: center;
      h4 {
        padding: 20px 0;
        font-weight: extrabold;
        color: $blue;
      }
      @media (--for-tablet-port-up) {
        h4 {
          padding: 50px 0;
        }
      }
    }
  }
</style>
