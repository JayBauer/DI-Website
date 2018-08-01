<template lang='pug'>
	section#account-head.account-page
		h1 Account
		nav.account-nav
			nuxt-link(:to="{ name: 'account-order-history' }"): h4 Order History
			nuxt-link(:to="{ name: 'account-profile' }"): h4 Profile
			nuxt-link(:to="{ name: 'login' }" @click.native="logout"): h4 Sign-Out
</template>

<script>
	export default {
		name: 'AccountHeader',
		methods: {
			logout() {
				this.$store.commit('logout')
				this.$apolloProvider.defaultClient.resetStore()
			}
		}
	}
</script>

<style lang="postcss">
	@import 'global/variables';

	#account-head {
		nav.account-nav {
			lost-center: 500px;
			justify-content: space-evenly;
			padding: 30px * * *;
			a {
				&.router-link-active {
					border-bottom: 1px solid $blue;
				}
				h4 {
					color: $blue;
				}
			}
		}
		@media (--for-phone) {
			nav.account-nav {
				a {
					h4 {
						font-size: 16px;
					}
				}
			}
		}
	}
</style>
