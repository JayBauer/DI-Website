<template lang="pug">
	div.mobile-menu
		transition-group(name="stagger" tag="ul" :css="false" v-on:before-enter="beforeEnter" v-on:enter="enter" appear)
			li(v-for="link, index in links" :key="link.link.name" :data-index="index")
				nuxt-link(:to="link.link") {{ link.text }}
</template>
<script>
	export default {
		name: 'MobileMenu',
		data: () => ({
			links: [
				{ link: { name: 'booking-id', params: { id: 'new' } }, text: 'Booking' },
				{ link: { name: 'services' }, text: 'Services' },
				{ link: { name: 'litigation' }, text: 'MRI for Litigation' },
				{ link: { name: 'faq' }, text: 'FAQ' },
				{ link: { name: 'contact' }, text: 'Contact' }
			]
		}),
		methods: {
			beforeEnter: function(el) {
				el.style.opacity = 0
				el.style.transform = 'translateY(100vh)'
			},
			enter: function(el, done) {
				var delay = el.dataset.index * 50
				setTimeout(function() {
					el.style.opacity = 1
					el.style.transform = 'translateY(0)'
				}, delay)
			}
		}
	}
</script>

<style lang="postcss">
	@import 'global/variables';

	.mobile-menu {
		position: fixed 0 0 0 0;
		display: flex;
		align-items: center;
		z-index: 9999;
		width: 100vw;
		height: 100%;
		background-color: $white;
		ul {
			width: 100%;
			padding: 20px;
			li {
				margin: 3px 0;
				border: 2px solid $orange;
				transition: all 0.6s ease-out;
				a {
					font-family: 'Klinic Slab', 'Raleway', sans-serif;
					font-size: 24px/24px;
					font-weight: bold;
					color: $blue;
					display: block;
					height: 100%;
					width: 100%;
					padding: 10px 20px;
					transition: all 0.2s;
					&:hover {
						transition: all 0.2s;
						color: $white;
						background-color: $orange;
					}
				}
			}
		}
	}
</style>
