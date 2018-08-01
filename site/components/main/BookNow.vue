<template lang="pug">
	section#book-now.book-now
		slot(name="title")
			h1 Book Now
		slot(name="content")
			h4 Receive results within 24 hours.
		Button(id="book-now-btn" size="big" text="Book A Scan" :link="{ name: 'booking-id', params: { id: 'new' } }")
</template>

<script>
	export default {
		name: 'BookNow'
	}
</script>

<style lang="postcss">
	@import 'global/variables';

	section#book-now.book-now {
		padding: * 20px;
		text-align: center;
		color: $white;
		h1 {
			color: $white;
		}
		h4 {
			padding: 20px 0;
		}
		@media (--for-tablet-port-up) {
			h4 {
				padding: 50px 0;
			}
		}
	}
</style>
