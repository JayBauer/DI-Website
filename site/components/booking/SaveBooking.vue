<template lang="pug">
  div
    Button(v-if="currentComponent == 'Referral' || currentComponent == 'Payment'" id="save-booking-btn" size="big" text="Save Progress" @click.native="saveBooking")
</template>

<script>
  import { UPLOAD_FILE } from '~/mutations'

  export default {
    name: 'SaveBooking',
    computed: {
      currentComponent() {
        return this.$store.getters.currentComponent
      }
    }
  }
</script>
