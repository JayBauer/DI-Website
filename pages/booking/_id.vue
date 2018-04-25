<template lang='pug'>
  div
    main-header
    main
      section#booking-header.booking-page
        h1 Book a Scan
        Button(v-if="currentComponent == 'Referral' || currentComponent == 'Payment'" id="save-booking-btn" classes="btn-big" text="Save Progress" @click.native="saveBooking")
        booking-header-nav(@clicked="navigate")

      section#booking-main.booking-page
        component(:is="currentComponent")
</template>

<script>
  import Cookie from 'js-cookie'

  import MainHeader from '~/components/MainHeader'
  import BookingHeaderNav from '~/components/booking/BookingHeaderNav'
  import BookingFor from '~/components/booking/BookingFor'
  import Resident from '~/components/booking/Resident'
  import BodyParts from '~/components/booking/BodyParts'
  import Waiver from '~/components/booking/Waiver'
  import Referral from '~/components/booking/Referral'
  import Payment from '~/components/booking/Payment'

  import { USER_ID } from '~/constants'
  import { GET_BOOKING } from '~/queries'
  import { SAVE_BOOKING } from '~/mutations'

  export default {
    name: 'Booking',
    data: () => ({
      booking: {}
    }),
    computed: {
      currentStore() {
        return this.$store.getters.state
      },
      currentComponent() {
        return this.$store.getters.currentComponent
      }
    },

    apollo: {
      booking: {
        query: GET_BOOKING,
        loadingKey: 'loading',
        variables() {
          return {
            id: this.$route.params.id
          }
        },
        result(data) {
          this.initialValues(data)
        }
      }
    },

    mounted() {
      this.$store.dispatch('updateComponent', 'BookingFor')
    },

    beforeDestroy() {
      this.$store.dispatch('resetBooking')
    },

    methods: {
      navigate(value) {
        this.selectedComponent = value
      },
      initialValues(data) {
        if(data.data.booking) {
          const { bookingFor, ontarioRes, bodyParts, waiver, referral, payment } = data.data.booking
          const newStore = {
            bookingFor,
            ontarioRes,
            bodyParts,
            waiver: {
              party: waiver.party,
              otherParty: waiver.otherParty,
              agree: waiver.agree,
              firstName: waiver.firstName,
              lastName: waiver.lastName,
              date: waiver.date
            },
            referral: {
              maple: referral.maple,
              upload: referral.upload
            },
            payment
          }
          this.$store.dispatch('setStore', newStore)
        }
      },
      saveBooking() {
        const { bookingFor, ontarioRes, bodyParts, waiver, referral, payment } = this.currentStore
        this.$apollo.mutate({
          mutation: SAVE_BOOKING,
          variables: {
            id: this.$route.params.id,
            user: Cookie.get(USER_ID),
            bookingFor,
            ontarioRes,
            bodyParts,
            waiver: {
              party: { set: waiver.party },
              otherParty: waiver.otherParty,
              agree: waiver.agree,
              firstName: waiver.firstName,
              lastName: waiver.lastName,
              date: waiver.date
            },
            referral,
            payment
          }
        }).then(res => {
          console.log('Successful booking save')
        }).catch(err => {
          console.log(err)
        })
      }
    },

    components: {
      MainHeader,
      BookingHeaderNav,
      BookingFor,
      Resident,
      BodyParts,
      Waiver,
      Referral,
      Payment
    },

    head() {
      return {
        title: 'Book A Scan'
      }
    }
  }
</script>

<style lang="postcss">
  @import 'global/variables';
  @import 'templates/booking';
</style>
