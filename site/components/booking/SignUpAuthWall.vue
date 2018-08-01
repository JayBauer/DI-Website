<template lang="pug">
	div#auth-wall
		SignUp(@signedUp="$store.dispatch('updateComponent', 'LogIn')")

		nav-buttons(previous="Waiver" @clicked="$store.dispatch('updateComponent', 'Waiver')")
</template>

<script>
	import SignUp from '~/components/account/SignUp'

	export default {
		name: 'SignUpAuthWall',
		components: {
			SignUp
		}
	}
</script>
