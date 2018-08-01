<template lang="pug">
	div#auth-wall
		h1 Log In
		h4 Log in to your account and continue along the booking process.
		LogIn(@loggedIn="$store.dispatch('updateComponent', 'Referral')")
		h4 Don't have an account? #[span(@click="$store.dispatch('updateComponent', 'SignUp')") Create one here.]

		nav-buttons(previous="Waiver" @clicked="$store.dispatch('updateComponent', 'Waiver')")
</template>

<script>
	import LogIn from '~/components/account/LogIn'

	export default {
		name: 'LogInAuthWall',
		components: {
			LogIn
		}
	}
</script>

<style lang="postcss">
	@import 'global/variables';

	#auth-wall {
		h4 {
			max-width: 600px;
			margin: 0 auto;
			padding: 50px 0;
			text-align: center;
			font-weight: light;
			span {
				font-weight: medium;
				color: $blue;
				cursor: pointer;
			}
		}
	}
</style>
