<template lang="pug">
	div
		section#services.services-page
			h1 Services
			div.service-blocks
				div.service-blocks--left
					transition(name="slide-up" appear)
						div.service-block
							h4 Are you eligible for a private MRI scan in Ontario?
							p
								| In Ontario, the Health Insurance Act (i.e. HIA) prohibits / prevents insured persons under the Ontario Health Insurance Plan (i.e. OHIP) from paying for insured services, such as an MRI scan. However, there are exceptions to the rule rendering an MRI examination an “uninsured service.”  The exceptions to the rule are as follows:
								br
								br
								| All Non-Residents of Ontario are Eligible for a private MRI scan in Ontario.
								br
								br
								| NON-RESIDENTS: Only persons who are ordinarily residents in Ontario, as well as certain other persons deemed to be residents under provincial regulations, are entitled to receive OHIP-insured services without charge. Therefore, medical services provided to non-residents in Ontario are not insured by OHIP.
				div.service-blocks__divider
				div.service-blocks--right
					transition(name="slide-up" appear)
						div.service-block
							h4 MRI (Magnetic Resonance Imaging)
							p
								| Magnetic Resonance Imaging, commonly called MRI, is a NON-INVASIVE, PAINLESS PROCEDURE that produces very detailed pictures of soft body tissue and organs without using ionizing radiation, as with other diagnostic procedures such as X-ray and Computed Tomography (CT).
								br
								br
								| Using a large magnet, radio waves and complex computer and software technology, MRI scans the patient's body and produces two or three-dimensional images of body tissues.
								br
								br
								| MRI is important as both a screening and diagnostic tool due to its ability to detect many cardiovascular, neurological, oncological and musculoskeletal diseases and or injuries earlier and more accurately than other modalities.
					transition(name="slide-up" appear)
						div.service-block
							h4 Customized Client Specific Packages
							p
								| Medical Imaging via MRI is a powerful tool in personal injury litigation, which offers litigators and their clients concrete diagnostic evidence when attempting to manage a clients' case.
								br
								br
								| Diagnostic Intelligence offers a customized approach to MRI imaging by providing clients with MRI imaging packages that incorporate a multipronged approach to discovering objective diagnostic findings for patients suffering from the debilitating effects of a trauma.
								br
								br
								| Diagnostic Intelligence's objective is to reward clients who choose to order more than one MRI scan by decreasing the overall fee per scan.  Ultimately, the risk, reward favors the client because the chance of identifying pathology is increased in this scenario.

		section#benefits.services-page(v-scrolled)
			h1 Benefits of Multiple Body Part MRI Scans
			div.circle-list
				div.circle-list__list-item
					SpinningIcon(color="blue")
					h4 Increases the likelihood of discovering pathology post trauma
				div.circle-list__list-item
					SpinningIcon(color="red")
					h4 Results afford medical providers, insurers and their litigators the task of identifying the right treatment strategies and medical evaluations instrumental in rehabilitating the client.
				div.circle-list__list-item
					SpinningIcon(color="yellow")
					h4 Objective findings may be utilized to address an injured Insured clients' Minor Injury Guideline (MIG) status either placing them within the MIG or outside of the MIG.

		book-now
			h1(slot="title") Customized Pricing
			h4(slot="content") Bundle pricing for multiple body-part scans
</template>

<script>
	import BookNow from '~/components/main/BookNow'
	import SpinningIcon from '~/components/shared/SpinningIcon'

	export default {
		name: 'Services',
		components: {
			BookNow,
			SpinningIcon
		},
		head() {
			return {
				title: 'Services'
			}
		}
	}
</script>

<style lang="postcss">
	@import 'global/variables';
	@import 'global/mixins';

	section.services-page {
		&#services {
			margin: 40px * * *;
			padding: 0 * * *;
			h1 {
				padding: 40px 0;
				background-color: $off-white;
			}
			.service-blocks {
				.service-block {
					lost-center: 560px;
					margin: * * 20px *;
					h4 {
						width: 100%;
						padding: 40px;
						background-color: $blue;
						color: $white;
					}
					p {
						font-family: 'Muli', sans-serif;
						font-size: 12px/13px;
						padding: 40px;
						background-color: $white;
					}
				}
			}
			@media (--for-phone) {
				h1 {
					font-size: 36px/36px;
				}
				.service-blocks {
					margin: 20px;
				}
			}
			@media (--for-tablet-port-up) {
				margin: 0 0 -75px;
				h1 {
					padding: 100px 0;
				}
				.service-blocks {
					transform: translateY(-50px);
					.service-block {
						p {
							font-size: 14px/15px;
						}
					}
				}
			}
			@media (--for-desktop-up) {
				.service-blocks {
					lost-flex-container: row;
					justify-content: center;
					align-items: center;
					&--left {
						margin-right: 30px;
					}
					&--right {
						margin-left: 30px;
					}
					&__divider {
						position: absolute -20px * * *;
						height: 103%;
						border: 0 2px 0 2px / solid / $white;
						border-radius: 5px;
					}
				}
			}
		}
		&#benefits {
			padding: 25px 0;
			background-color: $white;
			@media (--for-phone) {
				h1 {
					font-size: 18px/18px;
				}
				h4 {
					font-size: 12px/12px;
				}
			}
			@media (--for-tablet-port-up) {
				padding: 75px 0;
				h1 {
					padding: * * 30px *;
				}
			}
		}
	}
	.circle-list {
		.circle-list__list-item {
			lost-center: 600px;
			flex-flow: row;
			align-items: flex-start;
			padding: 30px 30px 0 40px;
			@include half-circle-spinner(36px, $blue, 1s);
			h4,
			p {
				padding: * * * 20px;
			}
		}
	}
	@media (--for-tablet-port-up) {
		.circle-list {
			.circle-list__list-item {
				padding: 50px * * 0;
				h4,
				p {
					padding: * * * 40px;
				}
			}
		}
	}

	/* Slide In Up */
	.slide-up-enter-active {
		transition: all 0.6s ease;
		transition-delay: 0.2s;
	}

	.slide-up-enter {
		opacity: 0;
		transform: translateY(100%);
	}

	.slide-up-enter-to {
		opacity: 1;
		transform: translateY(0);
	}
</style>
