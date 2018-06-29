<template lang="pug">
  div#payment
    h3 Final Payment
    h4 Complete the payment information below to finalize your MRI appointment. The Hospital will contact you within 24 hours to schedule your scan day and time.
    div.payment__totals
      h3 Cost: #[span ${{ cost - refPayment }}]
      h3 Discount: #[span ${{ discount }}]
      template(v-if="pay == 100")
        h3 Referral: #[span ${{ refPayment }}]
      h3 Total: #[span ${{ total }}]
    template(v-if="paymentOpen")
      PaymentCard(stripe="pk_test_7UqM3uMBb0D7cfMYdOT7mBJN")
    Button(id="pay-now-btn" size="big" :text="paymentOpen ? 'Complete Payment' : 'Pay Now'" @click.native="pay")

    nav-buttons(previous="Referral" @clicked="navigate")
</template>

<script>
  import PaymentCard from '~/components/booking/Paymentcard'
  import { createToken } from 'vue-stripe-elements-plus'
  import { PAYMENT } from '~/mutations'

  export default {
    name: 'Payment',
    data: () => ({
      paymentOpen: false,
      complete: false,
      stripeOptions: {
        // see https://stripe.com/docs/stripe.js#element-options for details
      }
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
        if(this.paymentOpen) {
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
            }).catch(err => {
              console.error(err)
            })
          })
        } else {
          this.paymentOpen = true
        }
      }
    }
  }
</script>

<style lang="postcss">
  #payment {
    lost-flex-container: column;
    .payment__totals {
      lost-center: 300px;
      padding: 100px 0;
      h3 {
        width: 100%;
        justify-content: space-between;
        margin: 0;
        padding: 0;
      }
    }
  }
</style>
