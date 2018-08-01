<template lang="pug">
	footer
		div.footer-logo
			img.footer-logo__circle(:src="logo.circle.src" :alt="logo.circle.alt")
			img.footer-logo__text(:src="logo.text.src" :alt="logo.text.alt")
		div.footer-info
			h5: span Phone/Fax: {{ contact.phone }}
			h5: span: a.footer-nav__email(:href="'mailto:' + contact.email") {{ contact.email }}
		div.footer-copy
			p Elite Digital Copyright &copy; 2018
</template>

<script>
	import { CONTACT, LOGO } from '~/constants'

	export default {
		name: 'Footer',
		data: () => ({
			contact: CONTACT,
			logo: LOGO
		})
	}
</script>

<style lang="postcss">
	@import 'global/variables';

	footer {
		position: relative;
		overflow: hidden;
		lost-flex-container: row;
		flex-flow: column;
		color: $white $purple;
		text-align: center;
		padding: 50px 30px;
		> div {
			lost-column: 1/1 0 0;
		}
		.footer-logo {
			align-self: center;
			position: relative;
			.footer-logo__circle {
				position: absolute 50% *;
				transform: translate(-110%, -50%);
				height: 120px;
			}
			.footer-logo__text {
				height: 60px;
			}
		}
		.footer-info {
			display: flex;
			justify-content: center;
			flex-flow: column;
			padding: 50px 0;
			h5 {
				padding: 12px 0;
				margin: 0 auto;
				span {
					font-weight: medium;
					white-space: nowrap;
					padding: 10px 0;
					border: 0 0 1px 0 / solid / $white;
				}
				a {
					font-weight: bold;
					color: $white;
				}
				&:nth-of-type(1) {
					padding: 12px 30px;
				}
				&:nth-of-type(2) span {
					border: none;
				}
			}
		}
		.footer-copy {
			font-weight: medium;
		}

		/* Media Queries */
		@media (--for-tablet-land) {
			.footer-logo {
				text-align: right;
			}
		}
		@media (--for-tablet-land-up) {
			flex-flow: row;
			> div {
				lost-column: 1/3;
			}
			.footer-logo {
				.footer-logo__circle {
					position: absolute;
					top: 50%;
					left: 0;
					transform: translate(-70%, -50%);
					height: 150px;
				}
				.footer-logo__text {
					position: relative;
					left: -15%;
					height: 60px;
				}
			}
			.footer-info {
				padding: 0;
				text-align: left;
				h5 {
					width: 100%;
					&:nth-of-type(1) {
						padding: 12px 0;
					}
					&:nth-of-type(2) span {
						border: 0 0 1px 0 / solid / $white;
					}
				}
			}
			.footer-copy {
				align-self: flex-end;
				text-align: right;
			}
		}
		@media (--for-desktop-up) {
			.footer-logo {
				lost-column: 3/7;
			}
			.footer-info {
				lost-column: 2/7;
			}
			.footer-copy {
				lost-column: 2/7;
			}
		}
	}
</style>
