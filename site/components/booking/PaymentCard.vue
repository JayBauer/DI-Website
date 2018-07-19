<template lang="pug">
  div.payment__form.credit-card-inputs(:class="{ complete }")
    h4 Complete the payment information below to finalize your MRI appointment. The Hospital will contact you within 24 hours to schedule your scan day and time.
    div.form-row
      TextInput(v-model="nameOnCard" placeholder="Name On Card" type="name")
      TextInput(v-model="postal" placeholder="Postal Code" type="postal")
    div.form-row.form-row--single
      div.form-input
        CardNumber.stripe-element.card-number(
          ref="cardNumber"
          :stripe="stripe"
          :options="{ placeholder: 'Card Number (XXXX XXXX XXXX XXXX)' }"
          @change="number = $event.complete")
    div.form-row
      div.form-input
        CardExpiry.stripe-element.card-expiry(
          ref="cardExpiry"
          :stripe="stripe"
          :options="{}"
          @change="expiry = $event.complete")
      div.form-input
        CardCvc.stripe-element.card-cvc(
          ref="cardCvc"
          :stripe="stripe"
          :options="{}"
          @change="cvc = $event.complete")
</template>

<script>
  import { CardNumber, CardExpiry, CardCvc } from 'vue-stripe-elements-plus'
  import { ME } from '~/queries'

  export default {
    name: 'PaymentCard',
    components: {
      CardNumber,
      CardExpiry,
      CardCvc
    },
    props: {
      stripe: {
        type: String,
        required: true
      }
    },
    data: () => ({
      me: {},
      stripeLoading: null,
      complete: false,
      number: false,
      expiry: false,
      cvc: false,
      nameOnCard: '',
      postal: ''
    }),
    apollo: {
      me: {
        query: ME,
        loadingKey: 'loading',
        result(data) {
          return this.setUserData()
        }
      }
    },
    watch: {
      number() { this.update() },
      expiry() { this.update() },
      cvc() { this.update() }
    },
    methods: {
      setUserData() {
        this.nameOnCard = `${this.me.firstName} ${this.me.lastName}`
        this.postal = this.me.postal
      },
      update() {
        this.complete = this.number && this.expiry && this.cvc
        if (this.number) {
          if (!this.expiry) {
            this.$refs.cardExpiry.focus()
          } else if (!this.cvc) {
            this.$refs.cardCvc.focus()
          }
        } else if (this.expiry) {
          if (!this.cvc) {
            this.$refs.cardCvc.focus()
          } else if (!this.number) {
            this.$refs.cardNumber.focus()
          }
        }
      }
    },
  }
</script>

<style lang="postcss">
  @import 'global/variables';

  .payment__form {
    padding: 50px 0;
    h4 {
      padding: 0 0 25px;
    }
    .stripe-element {
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
  }
</style>
