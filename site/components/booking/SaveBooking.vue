<template lang="pug">
  div
    Button(v-if="currentComponent == 'Referral' || currentComponent == 'Payment'" id="save-booking-btn" size="big" text="Save Progress" @click.native="saveBooking")
</template>

<script>
  export default {
    name: 'SaveBooking',
    computed: {
      currentComponent() {
        return this.$store.getters.currentComponent
      }
    }
  }
</script>
