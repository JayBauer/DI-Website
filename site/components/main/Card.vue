<template lang="pug">
	div.card-block(v-scrolled:modify="200")
			div(:class="`card-block__image card-block__image--${color}`")
				//- img(:src="'/img/icons/' + src" :alt="alt")
				custom-svg(:src="src" color="#FFF" :width="width" :height="height")
			div.card-block__text
				div
					slot
</template>

<script>
	import CustomSvg from '~/components/shared/CustomSvg'
	export default {
		name: 'Card',
		components: {
			CustomSvg
		},
		props: {
			color: {
				type: String,
				required: true
			},
			src: {
				type: String,
				required: true
			},
			alt: {
				type: String,
				required: false,
				default: ''
			},
			width: {
				type: String,
				required: true
			},
			height: {
				type: String,
				required: true
			}
		}
	}
</script>

<style lang="postcss">
	@import 'global/variables';

	@media (--for-desktop-up) {
		.card-blocks {
			&--left {
				.before-scroll {
					opacity: 0;
					transform: translateX(-100%);
				}
				.after-scroll {
					opacity: 1;
					transform: translateX(0);
					transition: opacity 0.7s ease, transform 0.7s ease;
				}
			}
			&--right {
				.before-scroll {
					opacity: 0;
					transform: translateX(100%);
				}
				.after-scroll {
					opacity: 1;
					transform: translateX(0);
					transition: opacity 0.7s ease, transform 0.7s ease;
				}
			}
		}
	}
</style>
