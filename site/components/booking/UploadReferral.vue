<template lang="pug">
	div.referral__upload-ref
		h3 Upload your referral
		h4 Attach a file from your computer below to continue to book your MRI scan
		template(v-if="existingImage")
			div.previous-image
				h4 Current Upload:
				img(:src="existingImage")
		div.dropbox(v-if="!image")
			div
				input(type="file" class="input-file" @change="onFileChange")
				p Drag your file(s) here
					br
					| or click to browse
		div.upload-btns(v-else)
			h4 {{ image.name }}
			template(v-if="!success")
				Button.small-text(id="remove-upload-btn" size="small" text="Delete" @click.native="removeImage")
					font-awesome-icon(:icon="deleteIcon")
				Button.small-text(id="upload-btn" size="small" text="Confirm" @click.native="readyUpload")
					font-awesome-icon(:icon="confirmIcon")
			template(v-else)
				h4 File uploaded successfully!
</template>

<script>
	import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
	import { faCheck } from '@fortawesome/fontawesome-free-solid'
	import { faTimes } from '@fortawesome/fontawesome-free-solid'
	import { UPLOAD_FILE } from '~/mutations'

	export default {
		name: 'UploadReferral',
		components: {
			FontAwesomeIcon
		},
		data: () => ({
			success: false,
			image: null
		}),
		computed: {
			existingImage() {
				return this.$store.getters.referral.previousImage
			},
			confirmIcon() {
				return faCheck
			},
			deleteIcon() {
				return faTimes
			}
		},
		methods: {
			onFileChange(e) {
				var files = e.target.files || e.dataTransfer.files
				if (!files.length) return
				this.image = files[0]
				this.$store.dispatch('updateReferralPay', {
					pay: false,
					upload: this.image
				})
			},
			removeImage(e) {
				this.image = ''
				this.success = false
				this.$store.dispatch('updateReferralPay', { pay: false, upload: {} })
			},
			readyUpload() {
				this.success = true
			// this.$store.dispatch('updateComponent', 'Payment')
			// if(this.$store.getters.referral.previousImage) {
			//   this.$apollo.mutate({
			//     mutation: DELETE_FILE,
			//     variables: {
			//       url: this.$store.getters.referral.previousImage
			//     }
			//   }).then(data => {
			//     console.log('Deleted image')
			//   })
			// }
			}
		}
	}
</script>

<style lang="postcss">
	@import 'global/variables';

	.referral__upload-ref {
		.previous-image {
			lost-center: 400px;
			flex-flow: column;
			justify-content: center;
			img {
				margin: 0 auto;
				padding: 25px 0;
			}
			h4 {
				padding: 0 !important;
			}
		}
		.dropbox {
			lost-center: 400px;
			justify-content: center;
			outline: 2px dashed grey;
			outline-offset: -1rem;
			background: $white;
			color: dimgray;
			margin: 0 auto;
			padding: 2rem 5rem;
			position: relative;
			cursor: pointer;
			transition: all 0.3s;
			&:hover {
				background-color: $lighter-gray;
				color: $blue;
				outline: 2px dashed $blue;
			}
			& p {
				font-family: 'Raleway', sans-serif;
				font-size: 20px/24px;
				text-align: center;
				padding: 50px 0;
			}
			img {
				max-width: 100%;
			}
		}
		.upload-btns {
			lost-center: 300px;
			h4 {
				lost-column: 1/1;
				font-weight: 700;
			}
			a {
				display: flex;
				justify-content: center;
				lost-column: 1/1;
				padding: 10px;
				svg {
					max-width: 250px;
				}
				@media (--for-tablet-port-up) {
					lost-column: 1/2;
				}
			}
		}
		.input-file {
			opacity: 0;
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			cursor: pointer;
		}
	}
</style>
