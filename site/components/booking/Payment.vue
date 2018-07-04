<template lang="pug">
  div#payment
    h3 Final Payment
    div.payment__totals
      h3 Cost: #[span ${{ cost - refPayment }}]
      h3 Discount: #[span ${{ discount }}]
      template(v-if="$store.getters.referral.pay")
        h3 Referral: #[span ${{ refPayment }}]
      h3 Total: #[span ${{ total }}]
    PaymentCard(:stripe="publicKey")
    Button(id="pay-now-btn" size="big" text="Pay Now" @click.native="pay")
    nav-buttons(previous="Referral" @clicked="navigate")
</template>

<script>
  import PaymentCard from '@c/booking/PaymentCard'
  import { createToken } from 'vue-stripe-elements-plus'
  import { PAYMENT } from '~/mutations'

  export default {
    name: 'Payment',
    data: () => ({
      complete: false,
      publicKey: process.env.STRIPE_PK
    }),
    computed: {
      cost() {
        return this.$store.getters.totalPrice
      },
      discount() {
        return 0
        // return this.$store.getters.discountPrice
      },
      refPayment() {
        if(this.$store.getters.referral.pay == true) {
          return 100
        }
        return 0
      },
      total() {
        return this.cost - this.discount
      }
    },
    components: { PaymentCard },
    methods: {
      navigate(component) {
        this.$store.dispatch('updateComponent', component)
      },
      pay() {
        // createToken returns a Promise which resolves in a result object with either a token or an error key.
        createToken().then(data => {
          console.log(data.token)
          this.$apollo.mutate({
            mutation: PAYMENT,
            variables: {
              source: data.token.id,
              amount: 10000,
              currency: 'USD'
            }
          }).then(data => {
            console.log('Stripe:', data)
            this.$store.dispatch('updatePayment', true)
            this.$store.dispatch('updateComponent', 'ThankYou')
            this.saveBooking()
          }).catch(err => {
            console.error(err)
          })
        })
      }
    }
  }
</script>

<style lang="postcss">
  #payment {
    lost-flex-container: column;
    .payment__totals {
      lost-center: 300px;
      width: 300px;
      h3 {
        width: 100%;
        justify-content: space-between;
        margin: 0;
        padding: 5px 0;
      }
    }
  }
</style>
