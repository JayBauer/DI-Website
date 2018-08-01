<template lang='pug'>
	main
		section#booking-header.booking-page
			h1 Book a Scan
			SaveBooking
			booking-header-nav(@clicked="navigate")

		section#booking-main.booking-page
			transition(name="page" mode="out-in")
				component(:is="currentComponent")
</template>

<script>
	import Cookie from 'js-cookie'

	import BookingHeaderNav from '~/components/booking/BookingHeaderNav'
	import BookingFor from '~/components/booking/BookingFor'
	import Resident from '~/components/booking/Resident'
	import BodyParts from '~/components/booking/BodyParts'
	import Waiver from '~/components/booking/Waiver'
	import LogIn from '~/components/booking/LogInAuthWall'
	import SignUp from '~/components/booking/SignUpAuthWall'
	import Referral from '~/components/booking/Referral'
	import Payment from '~/components/booking/Payment'
	import ThankYou from '~/components/booking/ThankYou'
	import SaveBooking from '~/components/booking/SaveBooking'

	import { USER_ID } from '~/constants'
	import { GET_BOOKING } from '~/queries'

	export default {
		name: 'Booking',
		components: {
			BookingHeaderNav,
			BookingFor,
			Resident,
			BodyParts,
			Waiver,
			LogIn,
			SignUp,
			Referral,
			Payment,
			ThankYou,
			SaveBooking
		},
		data: () => ({
			booking: {}
		}),
		computed: {
			currentComponent() {
				return this.$store.getters.currentComponent
			}
		},
		apollo: {
			booking: {
				query: GET_BOOKING,
				loadingKey: 'loading',
				variables() {
					return {
						bookingNumber: this.$route.params.id
					}
				},
				error(err) {
					console.log('Error! ' + err)
				},
				result({ data }) {
					this.initialValues(data)
				}
			}
		},

		// validate({ params }) {
		//   return /^\d+$/.test(params.id)
		// },

		beforeDestroy() {
			this.$store.dispatch('resetBooking')
		},

		methods: {
			navigate(value) {
				this.selectedComponent = value
			},
			initialValues(data) {
				if (data.booking) {
					const {
						bookingFor,
						ontarioRes,
						bodyParts,
						waiver,
						referral,
						payment,
						progress
					} = data.booking
					const newStore = {
						bookingFor,
						ontarioRes,
						bodyParts,
						waiver: {
							party: waiver.party,
							otherParty: waiver.otherParty,
							agree: waiver.agree,
							firstName: waiver.firstName,
							lastName: waiver.lastName,
							date: waiver.date
						},
						referral: {
							pay: referral.pay,
							upload: null,
							previousImage: referral.upload ? referral.upload.url : null
						},
						payment
					}
					this.$store.dispatch('setStore', newStore)
					this.$store.dispatch('updateComponent', progress)
				} else {
					this.$store.dispatch('updateComponent', 'BookingFor')
				}
			}
		},

		head() {
			return {
				title: 'Book A Scan'
			}
		}
	}
</script>

<style lang="postcss">
	@import 'global/variables';
	@import 'templates/booking';
</style>
