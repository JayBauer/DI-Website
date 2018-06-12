<template lang="pug">
  div#payment
    h3 Final Payment
    h4 Complete the payment information below to finalize your MRI appointment. The Hospital will contact you within 24 hours to schedule your scan day and time.
    div.payment__totals
      h3 Cost: #[span ${{ cost - maple }}]
      h3 Discount: #[span ${{ discount }}]
      template(v-if="maple == 100")
        h3 Referral: #[span ${{ maple }}]
      h3 Total: #[span ${{ total }}]
    div.payment__form
      template(v-if="paymentOpen")
        card.stripe-card(:class="{ complete }" stripe="pk_test_7UqM3uMBb0D7cfMYdOT7mBJN" :options="stripeOptions" @change="complete = $event.complete")
      Button(id="pay-now-btn" size="big" :text="paymentOpen ? 'Complete Payment' : 'Pay Now'" @click.native="pay")

    nav-buttons(next="Referral" @clicked="navigate")
</template>

<script>
  import { Card, createToken } from 'vue-stripe-elements-plus'
  import { SAVE_CUSTOMER } from '~/mutations'

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
      maple() {
        if(this.$store.getters.referral.maple == true) {
          return 100
        }
        return 0
      },
      total() {
        return this.cost - this.discount
      }
    },
    components: { Card },
    methods: {
      navigate(component) {
        this.$store.dispatch('updateComponent', component)
      },
      pay() {
        if(this.paymentOpen) {
          // createToken returns a Promise which resolves in a result object with
          // either a token or an error key.
          // See https://stripe.com/docs/api#tokens for the token object.
          // See https://stripe.com/docs/api#errors for the error object.
          // More general https://stripe.com/docs/stripe.js#stripe-create-token.
          createToken().then(data => {
            console.log(data.token)
            this.$apollo.mutate({
              mutation: SAVE_CUSTOMER,
              variables: {
                source: String(data.token.id),
                email: 'test@elitedigital.ca'
              }
            }).then(stripe => {
              console.log('Stripe: ' + stripe)
              this.$apollo.mutate({
                mutation: PAYMENT,
                variables: {
                  customer: stripe.stripe_id
                }
              })
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
    .payment__form {
      lost-center: 400px;
      > div {
        width: 400px;
      }
      .stripe-card {
        padding: * * 50px *;
      }
    }
  }
</style>
