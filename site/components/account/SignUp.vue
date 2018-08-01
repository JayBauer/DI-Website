<template lang="pug">
	form(@submit.prevent='signup')
		div.form-row
			TextInput(v-model="firstName" placeholder="First Name" type="name" @validate="value => valid.firstName = value")
			TextInput(v-model="lastName" placeholder="Last Name" type="name" @validate="value => valid.lastName = value")
		div.form-row
			TextInput(v-model="phone" placeholder="Phone Number" type="phone" @validate="value => valid.phone = value")
			TextInput(v-model="email" placeholder="Email Address" type="email" @validate="value => valid.email = value")
		div.form-row.form-row--single
			TextInput(v-model="address1" placeholder="Address" type="text" @validate="value => valid.address = value")
		div.form-row.form-row--single
			TextInput(v-model="address2" placeholder="Address Line 2" type="text")
		div.form-row
			TextInput(v-model="city" placeholder="City" type="text" @validate="value => valid.city = value")
			TextInput(v-model="province" placeholder="Province" type="text" @validate="value => valid.province = value")
		div.form-row
			TextInput(v-model="postal" placeholder="Postal Code" type="postal" @validate="value => valid.postal = value")
		div.form-row
			TextInput(v-model="password" placeholder="Password" type="password" @validate="value => valid.password = value")
			TextInput(v-model="passwordConfirm" placeholder="Confirm Password" type="password" @validate="value => valid.passwordConfirm = value")
		div.form-row.complete-error
			transition(name="error")
				template(v-if="incomplete")
					h4 Please complete all fields
		div.form-row
			Button(id="signup-btn" size="big" text="Create Account" @click.native="signup")
</template>

<script>
	import { SIGNUP } from '~/mutations'

	export default {
		name: 'SignUp',
		data: () => ({
			email: '',
			password: '',
			passwordConfirm: '',
			firstName: '',
			lastName: '',
			phone: '',
			address1: '',
			address2: '',
			city: '',
			province: '',
			postal: '',
			valid: {
				firstName: false,
				lastName: false,
				phone: false,
				email: false,
				address: false,
				city: false,
				province: false,
				postal: false,
				password: false,
				passwordConfirm: false
			},
			incomplete: false
		}),

		computed: {
			formValid() {
				const {
					phone,
					email,
					address,
					city,
					province,
					postal,
					password,
					passwordConfirm
				} = this.valid
				return (
					phone &&
					email &&
					address &&
					city &&
					province &&
					postal &&
					password &&
					passwordConfirm
				)
			}
		},

		methods: {
			signup() {
				if (this.formValid) {
					this.incomplete = false
					const {
						email,
						password,
						firstName,
						lastName,
						phone,
						address1,
						address2,
						city,
						province,
						postal
					} = this.$data
					this.$apollo
						.mutate({
							mutation: SIGNUP,
							variables: {
								email,
								password,
								firstName,
								lastName,
								phone,
								address1,
								address2,
								city,
								province,
								postal
							}
						})
						.then(res => {
							this.$emit('signedUp', true)
						})
						.catch(err => {
							console.log(err)
							this.$emit('signedUp', false)
						})
				} else {
					this.incomplete = true
				}
			}
		}
	}
</script>

<style lang="postcss" scoped>
	@import 'global/variables';

	.btn-big {
		margin: 50px * 30px;
	}

	.complete-error {
		height: 10px;
		h4 {
			display: flex;
			justify-content: center;
			color: $orange;
			padding: 0 !important;
		}
	}
</style>
