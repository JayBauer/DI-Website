<template lang="pug">
  div#referral.booking-page
    template(v-if="!selectedComponent")
      div.referral__nav
        h3 Do you need a referral?
        h4 Click below to visit our referral partner Maple and see a doctor via video conference in 15 minutes or less!
        Button.small-text(id="upload-ref-btn" size="big" text="Upload Referral" @click.native="selectedComponent = 'upload-referral'")
        Button.small-text(id="maple-ref-btn" size="big" text="Pay for a Maple Referral" @click.native="selectedComponent = 'maple-referral'")

    component(:is="selectedComponent")

    nav-buttons(next="Payment" previous="Waiver" @clicked="navigate")
</template>

<script>
  import UploadReferral from '~/components/booking/UploadReferral'
  import MapleReferral from '~/components/booking/MapleReferral'

  export default {
    name: 'Referral',
    data: () => ({
      selectedComponent: ''
    }),
    components: {
      'upload-referral': UploadReferral,
      'maple-referral': MapleReferral
    },
    methods: {
      navigate(component) {
        this.$store.dispatch('updateComponent', component)
      }
    }
  }
</script>
