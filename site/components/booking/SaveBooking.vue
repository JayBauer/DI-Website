<template lang="pug">
  div
    Button(v-if="currentComponent == 'Referral' || currentComponent == 'Payment'" id="save-booking-btn" size="big" text="Save Progress" @click.native="saveBooking")
</template>

<script>
  import { SAVE_BOOKING } from '~/mutations'
  import { UPLOAD_FILE } from '~/mutations'

  export default {
    name: 'SaveBooking',
    computed: {
      currentComponent() {
        return this.$store.getters.currentComponent
      }
    },
    methods: {
      saveBooking() {
        const { bookingFor, ontarioRes, bodyParts, waiver, referral, payment, currentComponent } = this.$store.getters.store
        let imageUploaded = null

        var saveBookingMutation = () => this.$apollo.mutate({
          mutation: SAVE_BOOKING,
          variables: {
            id: this.$route.params.id,
            user: this.$store.getters.currentUser,
            bookingFor,
            ontarioRes,
            bodyParts: JSON.parse(JSON.stringify(bodyParts)),
            waiver: {
              party: { set: waiver.party },
              otherParty: JSON.parse(JSON.stringify(waiver.otherParty)),
              agree: waiver.agree,
              firstName: waiver.firstName,
              lastName: waiver.lastName,
              date: waiver.date
            },
            referral: {
              pay: referral.pay,
              upload: imageUploaded
            },
            payment,
            progress: currentComponent
          }
        }).then(res => {
          console.log('Successful booking save')
          this.$router.push({ name: 'account-order-history' })
        }).catch(err => {
          console.error(err)
        })

        if(!referral.pay && referral.upload) {
          this.$apollo.mutate({
            mutation: UPLOAD_FILE,
            variables: {
              file: referral.upload,
              path: '/uploads/'
            }
          }).then(data => {
            console.log('UPLOAD: ', data.data.uploadFile.url)
            imageUploaded = { connect: { url: data.data.uploadFile.url } }
            saveBookingMutation()
          }).catch(err => {
            console.error(err)
          })
        } else {
          saveBookingMutation()
        }
      }
    }
  }
</script>
