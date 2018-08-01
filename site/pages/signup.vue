<template lang='pug'>
	div
		section#signup.login-page
			h1 Create Account
			h4 Create an account here to save your quote and continue along the booking process.
			SignUp(@signedUp="value => { if(value) $router.push({ name: 'login' }) }")
			h4 Already have an account? #[nuxt-link(:to="{ name: 'login' }") Log in here.]
</template>

<script>
	import SignUp from '~/components/account/SignUp'

	export default {
		name: 'SignUpPage',
		head() {
			return {
				title: 'Sign Up'
			}
		},
		components: {
			SignUp
		}
	}
</script>

<style lang="postcss">
	@import 'global/variables';

	section.login-page {
		padding: * 30px;
		background-color: $white;
		h4 {
			max-width: 600px;
			margin: 0 auto;
			padding: 50px 0;
			text-align: center;
			font-weight: light;
			a {
				font-weight: medium;
				color: $blue;
			}
		}
	}
</style>
