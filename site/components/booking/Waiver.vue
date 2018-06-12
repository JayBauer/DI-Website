<template lang='pug'>
  div#third-party-waiver
    h3 Third Party Payment Waiver
    h4 In Ontario, the Ontario Health Insurance Act allows third parties, such as private Auto and Health Insurers, Law Firms, WSIB, and Individual Employers and Corporations to purchase an MRI scan for clients.
    h4 I agree that a third party listed below is paying in full for the MRI scan service in question and that I am not paying for this MRI scan service personally.
    div.third-party-waiver__form.form-group
      div.form-element.form-element--checkbox(v-for="(options, index) in party")
        input(type="checkbox" :id="options.id" :value="options.name" :key="options.id" v-model="selectedParties")
        label(:for="options.id"): h4 {{ options.name }}

      div.form-element.form-element--checkbox.form-option__other
        input(type="checkbox" id="other" value="other" v-model="otherPartySelect")
        label(for="other")
          h4(v-show="!otherPartySelect") Other
          TextInput(v-model="otherPartyText" placeholder="Please Specify" :disabled="!otherPartySelect" v-show="otherPartySelect")
          //- input.form-element.form-element--input(v-model="otherPartyText" placeholder="Please Specify" :disabled="!otherPartySelect")

    div.third-party-waiver__form.form-group
      div.form-element.form-element--checkbox
        input(type="checkbox" id="agree" value="agree" v-model="agree")
        label(for="agree") I agree to the terms stated above

    div.third-party-waiver__form
      div.form-row
        TextInput(v-model="firstName" placeholder="First Name" type="name")
        TextInput(v-model="lastName" placeholder="Last Name" type="name")
      div.form-row.form-row--single
        TextInput(v-model="date" placeholder="Date" type="date")

    nav-buttons(next="Referral" previous="BodyParts" @clicked="navigate" :disabled="disabled")
</template>

<script>
  export default {
    name: 'BodyParts',
    data: () => ({
      party: [
        { name: 'Auto-Insurer', id: 'auto-insurer' },
        { name: 'Corporation', id: 'corporation' },
        { name: 'Employer', id: 'employer' },
        { name: 'Law Firm', id: 'law-firm' }
      ],
      selectedParties: [],
      otherPartySelect: false,
      otherPartyText: '',
      agree: false,
      firstName: '',
      lastName: '',
      date: ''
    }),

    computed: {
      disabled() {
        if(
          (this.selectedParties.length > 0 || (this.otherPartySelect == true && this.otherPartyText != '')) &&
          this.agree == true &&
          this.firstName != '' &&
          this.lastName != '' &&
          this.date != ''
        ) {
          return false
        }
        return true
      }
    },

    mounted() {
      const { party, otherParty, agree, firstName, lastName, date } = this.$store.getters.waiver
      this.selectedParties = party
      this.otherPartySelect = otherParty.selected
      this.otherPartyText = otherParty.text
      this.agree = agree
      this.firstName = firstName
      this.lastName = lastName
      this.date = date
    },

    methods: {
      navigate(component) {
        this.$store.dispatch('updateComponent', component)
        this.$store.dispatch('updateWaiver', {
          party: this.selectedParties,
          otherParty: {
            selected: this.otherPartySelect,
            text: this.otherPartyText
          },
          agree: this.agree,
          firstName: this.firstName,
          lastName: this.lastName,
          date: this.date
        })
      }
    }
  }
</script>

<style lang="postcss">
  @import 'global/variables';
  @import 'components/forms';

  #third-party-waiver {
    > h4 {
      padding: * * 30px *;
    }
    .third-party-waiver__form {
      padding: * * 30px *;
      label {
        position: relative;
        width: 100%;
      }
      &:nth-of-type(2) {
        .form-element--checkbox {
          lost-center: 300px;
        }
      }
      &:last-of-type {
        lost-center: 600px;
        input {
          lost-column: 1/3;
        }
      }
      .form-element--checkbox {
        lost-center: 200px;
        padding: 5px 0;
        input[type="checkbox"] + label::before {
          background-color: $lighter-gray;
          border-color: $light-gray;
        }
        input[type="checkbox"]:checked + label::before {
          font-awesome: times;
          color: $gray;
        }
      }
    }
    .form-option__other {
      input {
        position: absolute;
        top: -10px;
        left: 50px;
        z-index: 20;
        background-color: $white;
      }
    }
  }
</style>
