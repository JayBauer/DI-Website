<template lang="pug">
  div.payment__form.credit-card-inputs(:class="{ complete }")
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
  export default {
    props: [ 'stripe' ],
    data: () => ({
      complete: false,
      number: false,
      expiry: false,
      cvc: false
    }),
    components: {
      CardNumber,
      CardExpiry,
      CardCvc
    },
    methods: {
      update() {
        this.complete = this.number && this.expiry && this.cvc
        // field completed, find field to focus next
        if(this.number) {
          if(!this.expiry) {
            this.$refs.cardExpiry.focus()
          } else if(!this.cvc) {
            this.$refs.cardCvc.focus()
          }
        } else if(this.expiry) {
          if(!this.cvc) {
            this.$refs.cardCvc.focus()
          } else if(!this.number) {
            this.$refs.cardNumber.focus()
          }
        }
        // no focus magic for the CVC field as it gets complete with three
        // numbers, but can also have four
      }
    },
    watch: {
      number() { this.update() },
      expiry() { this.update() },
      cvc() { this.update() }
    }
  }
</script>

<style lang="postcss">
  @import 'global/variables';

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
</style>
