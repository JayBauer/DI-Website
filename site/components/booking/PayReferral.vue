<template lang="pug">
	div.referral__get-ref
		h3 Pay For a Referral
		h4 A referral can be provided for a $100 fee. By clicking below you acknowledge that this will be added to your final total cost.
		Button(id="pay-for-ref-btn" size="big" text="Pay For a Referral" @click.native="payReferral")
			font-awesome-icon(:icon="confirmIcon")
</template>

<script>
	import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
	import { faCheck } from '@fortawesome/fontawesome-free-solid'

	export default {
		name: 'PayReferral',
		components: {
			FontAwesomeIcon
		},
		computed: {
			referral() {
				return this.$store.getters.referral
			},
			confirmIcon() {
				return faCheck
			}
		},
		methods: {
			payReferral() {
				this.$store.dispatch('updateReferralPay', { pay: true, upload: null })
			}
		}
	}
</script>
