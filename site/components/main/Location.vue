<template lang="pug">
	section#location.location
		div.location__map(v-scrolled:modify="500")
			div.location__map__image
				img(src="/img/di-map.png" alt="Location Map")
		div.location__divider
		div.location__info(v-scrolled:modify="500")
			div.location__info__text
				h1 Location
				br
				h5 Humber River Hospital
				h5: span 1235 Wilson Ave
				h5: span Toronto, ON
				h5: span M3M 0B2
				br
				br
				h5: a(:href="'mailto:' + email")
					font-awesome-icon(:icon="icon")
					| {{ email }}

				Button(id="contact-btn" size="big" text="Contact Us" :link="{ name: 'contact' }")
</template>

<script>
	import { CONTACT } from '~/constants'
	import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
	import { faEnvelope } from '@fortawesome/fontawesome-free-solid'

	export default {
		name: 'Location',
		components: {
			FontAwesomeIcon
		},
		data: () => ({
			email: CONTACT.email
		}),
		computed: {
			icon() {
				return faEnvelope
			}
		}
	}
</script>

<style lang="postcss">
	@import 'global/variables';

	section.location {
		lost-center: 1200px;
		flex-flow: column;
		padding: 30px;
		margin: 30px auto;
		.location__map {
			align-self: center;
			.location__map__image img {
				width: 100%;
			}
			&.before-scroll {
				opacity: 0;
				transform: translateX(-30%);
			}
			&.after-scroll {
				transition: all 0.5s;
				opacity: 1;
				transform: translateX(0);
			}
		}
		.location__divider {
			margin: 15px 0;
			border: 1px solid $white;
		}
		.location__info {
			align-self: center;
			padding: 50px 30px;
			background-color: $white;
			text-align: center;
			h5 {
				a {
					position: relative;
					svg {
						position: absolute;
						left: -30px;
						color: $orange;
					}
				}
			}
			#contact-btn {
				margin-top: 40px;
			}
			&.before-scroll {
				opacity: 0;
				transform: translateX(30%);
			}
			&.after-scroll {
				transition: all 0.5s;
				opacity: 1;
				transform: translateX(0);
			}
		}

		/* Media Queries */
		@media (--for-phone) {
			h5 {
				a {
					font-size: 12px;
					&::before {
						top: -3px;
						left: -15px !important;
					}
				}
			}
			.location__map {
				max-width: 340px;
			}
			.location__info {
				max-width: 340px;
				width: 100%;
				button {
					font-size: 12px/12px;
					padding: 12px 0;
					width: 140px;
					border-width: 3px;
				}
			}
		}
		@media (--for-tablet-port-up) {
			.location__map {
				max-width: 500px;
			}
			.location__info {
				max-width: 500px;
				padding: 100px;
				text-align: left;
			}
		}
		@media (--for-tablet-land-up) {
			position: relative;
			flex-flow: row;
			padding: 100px 30px;
			.location__map {
				lost-column: 1/2 0 60px;
				transform: translateY(-5%);
			}
			.location__divider {
				position: absolute 0 * * *;
				height: 90%;
				left: calc(50% - 2px);
				transform: translateY(5%);
				border: 0 2px 0 2px / solid / $white;
				border-radius: 5px;
			}
			.location__info {
				display: flex;
				lost-column: 1/2;
				align-items: center;
				align-self: auto;
				justify-content: center;
				transform: translateY(5%);
				padding: 50px 30px;
				.location__info__text {
					h1,
					h5 {
						text-align: left;
					}
				}
			}
		}
	}
</style>
