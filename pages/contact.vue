<template lang="pug">
  div
    section#contact.contact-page
      h1 Contact
      form#contact-form.contact-form
        div.form-row
          TextInput(type='text' name='fname' placeholder='First Name')
          TextInput(type='text' name='lname' placeholder='Last Name')
        div.form-row
          TextInput(type='text' name='phone' placeholder='Phone Number')
          TextInput(type='text' name='email' placeholder='Email Address')
        div.form-row.form-row--single.form-input
          textarea(name='message' placeholder='Message' form='contact-form')
        div.form-row
          Button(id="submit-btn" size="big" text="Submit")

    section#book-now.contact-page
      h1 Book Now
      h4 Get Results back in two weeks.
      Button(id="book-a-scan-btn" size="big" text="Book A Scan")

    location.contact-page
</template>

<script>
  import Location from '~/components/main/Location'

  export default {
    name: 'Contact',
    data: () => ({

    }),
    components: {
      Location
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
  @import 'components/forms';

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
