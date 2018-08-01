<template lang='pug'>
	main
		account-header
		nuxt-child
</template>

<script>
	import AccountHeader from '~/components/account/AccountHeader'

	export default {
		name: 'Account',
		components: {
			AccountHeader
		},
		head() {
			return {
				title: 'Your Account'
			}
		}
	}
</script>

<style lang="postcss">
	@import 'global/variables';

	section.account-page {
		background-color: $white;
		h4 {
			text-align: center;
			font-weight: light;
		}
	}
</style>
