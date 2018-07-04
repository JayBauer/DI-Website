<template lang="pug">
  div#referral.booking-page
    template
      div.referral__nav
        h3 Do you need a referral?
        h4 You will need a referral to proceed with your booking. If you have a referral you can upload it here. If you need a referral, you can opt to pay an additional $100 fee and a referral will be provided.
        Button.small-text(id="upload-ref-btn" size="big" text="Upload Referral" @click.native="uploadSelect")
        Button.small-text(id="pay-ref-btn" size="big" text="Pay for a Referral" @click.native="paySelect")

    component(:is="selectedComponent")

    nav-buttons(previous="Waiver" next="Payment" @clicked="navigate" :disabled="!uploaded")
</template>

<script>
  import UploadReferral from '~/components/booking/UploadReferral'
  import PayReferral from '~/components/booking/PayReferral'

  export default {
    name: 'Referral',
    data: () => ({
      selectedComponent: ''
    }),
    computed: {
      uploaded() {
        let { referral } = this.$store.getters
        if(!!referral.pay || !!referral.upload || !!referral.previousImage) return true
      }
    },
    components: {
      'upload-referral': UploadReferral,
      'pay-referral': PayReferral
    },
    methods: {
      navigate(component) {
        this.$store.dispatch('updateComponent', component)
      },
      uploadSelect() {
        this.selectedComponent = 'upload-referral'
        this.$store.dispatch('updateReferralPay', { pay: false, upload: null })
      },
      paySelect() {
        this.selectedComponent = 'pay-referral'
        this.$store.dispatch('updateReferralPay', { pay: false, upload: null })
      }
    }
  }
</script>

<style lang="postcss">
  @import 'global/variables';

  #referral {
    h4 {
      padding: * * 75px *;
    }
    .referral__nav {
      lost-center: 600px;
      padding-bottom: 50px;
      a {
        display: flex;
        justify-content: center;
        lost-column: 1/1;
        padding: 20px;
        svg {
          max-width: 250px;
        }
        @media (--for-tablet-port-up) {
          lost-column: 1/2;
        }
      }
      > button {
        lost-column: 1/2;
        button {
          font-size: 16px;
        }
      }
    }
    .referral__get-ref {
      display: flex;
      flex-flow: column;
      justify-content: center;
    }
  }
</style>
