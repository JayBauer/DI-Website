<template lang="pug">
	div.single-order.single-order--content
		h4 {{ convertDate(date) }}
		h4: nuxt-link(:to="{ name: 'booking-id', params: { id } }") {{ id }}
		h4 {{ status ? 'Scan Ordered' : 'In Progress' }}
		h5.delete-icon(@click="$emit('deleted')"): font-awesome-icon(:icon="trashIcon")
</template>
<script>
	import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
	import { faTrash } from '@fortawesome/fontawesome-free-solid'

	export default {
		name: 'Order',
		components: {
			FontAwesomeIcon
		},
		props: {
			id: {
				type: String,
				required: true
			},
			date: {
				type: String,
				required: true
			},
			status: {
				type: Boolean,
				required: true
			}
		},
		computed: {
			trashIcon() {
				return faTrash
			}
		},
		methods: {
			convertDate(date) {
				var newDate = new Date(date)
				return newDate.toLocaleDateString('en-US')
			}
		}
	}
</script>

<style lang="postcss">
	@import 'global/variables';

	.single-order {
		lost-center: 1000px;
		align-items: center;
		flex-flow: row nowrap;
		h4 {
			lost-column: 5/16 0 15px;
			word-wrap: break-word;
		}
		&--headers {
			padding: 50px 0 10px 0;
			margin: * * 30px *;
			color: $blue;
			border-bottom: 1px solid $blue;
		}
		&--content {
			padding: 10px *;
			h4:nth-of-type(-n + 2) {
				font-weight: medium;
				color: $blue;
			}
		}
		&.single-order--content {
			h4:nth-of-type(2) {
				text-transform: uppercase;
			}
			.delete-icon {
				cursor: pointer;
			}
		}
	}
	@media (--for-phone) {
		.single-order {
			h4 {
				font-size: 16px;
			}
		}
	}
</style>
