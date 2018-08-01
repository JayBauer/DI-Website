<template lang="pug">
	div#payment
		h3 Final Payment
		div.payment__totals
			h3 Cost: #[span ${{ $store.getters.totalPrice - refPayment }}]
			template(v-if="$store.getters.referral.pay")
				h3 Referral: #[span ${{ refPayment }}]
			h3 Discount: #[span -${{ $store.getters.discount }}]
			h3 Total: #[span ${{ $store.getters.finalPrice }}]
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
		components: {
			PaymentCard
		},
		data: () => ({
			complete: false,
			publicKey: process.env.STRIPE_PK
		}),
		computed: {
			refPayment() {
				return this.$store.getters.referral.pay ? 100 : 0
			}
		},
		methods: {
			navigate(component) {
				this.$store.dispatch('updateComponent', component)
			},
			pay() {
				// createToken returns a Promise which resolves in a result object with either a token or an error key.
				createToken().then(data => {
					console.log(data.token)
					this.$apollo
						.mutate({
							mutation: PAYMENT,
							variables: {
								source: data.token.id,
								amount: this.$store.getters.finalPrice * 100,
								currency: 'USD'
							}
						})
						.then(data => {
							console.log('Stripe:', data)
							this.$store.dispatch('updatePayment', true)
							this.$store.dispatch('updateComponent', 'ThankYou')
							this.saveBooking(false)
						})
						.catch(err => {
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
