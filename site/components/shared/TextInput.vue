<template lang='pug'>
  div.form-input
    input(
      :type="type"
      :value="value"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
      ref="input"
      @blur="blurred = true")
    transition(name="error")
      template(v-if="blurred == true")
        p(v-if="type == 'email' && !validEmail(value)") Invalid Email
        p(v-if="type == 'password' && !validPassword(value)") Must contain at least 8 characters and one number
        p(v-if="type == 'phone' && !validPhone(value)") Invalid phone number
        p(v-if="type == 'postal' && !validPostal(value)") Invalid postal code
        p(v-if="type == 'date' && !validDate(value)") Date format should be MM/DD/YYYY
</template>

<script>
  export default {
    name: 'TextInput',
    props: [ 'value', 'placeholder', 'type' ],
    data: () => ({
      blurred: false
    }),
    methods: {
      validEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email)
      },
      validPassword(password) {
        var re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // At least 8 characters and one number
        return re.test(password)
      },
      validPhone(phone) {
        var re = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/; // Covers all common phone number formats
        return re.test(phone)
      },
      validPostal(postal) {
        var re = /^([ABCEGHJKLMNPRSTVXY][0-9][A-Z] [0-9][A-Z][0-9])*$/; // Canadian Postal Codes
        return re.test(postal)
      },
      validDate(date) {
        var re = /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/; // MM/DD/YYYY formatting
        return re.test(date)
      }
    }
  }
</script>

<style lang="postcss">
  @import 'global/variables';

  .form-input {
    input, textarea {
      width: 100%;
      font-family: "Muli", "Klinic Slab", sans-serif;
      font-size: 15px/17px;
      padding: 15px 20px;
      color: $gray;
      border: 1px solid;
      border-color: $light-gray;
      &::placeholder {
        color: $light-gray;
      }
    }

    p {
      position: absolute;
      font-weight: bold;
      padding: 5px * * 15px;
      color: $orange;
      max-width: 100%;
    }

    .error-enter-active {
      transition: all 0.3s ease-out;
    }

    .error-leave-active {
      transition: all 0.3s;
    }

    .error-enter, .error-leave-to {
      opacity: 0;
      transform: translateY(-30%);
    }

    .error-enter-to, .error-leave {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
