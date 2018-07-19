<template lang="pug">
  section#order-history.account-page
    template(v-if="loading > 0")
      Preloader
    template(v-if="bookings.length == 0")
      h4 You haven't booked a scan yet! #[nuxt-link(:to="{ name: 'booking-id', params: { id: 'new' } }") Click here] to begin.
    template(v-else)
      div.single-order.single-order--headers
        h4 Date Created
        h4 Booking Number
        h4 Status
      div(v-for="booking in bookings")
        Order(:id="booking.bookingNumber" :date="booking.updatedAt" :status="booking.payment" :key="booking.bookingNumber" @deleted="deleteBooking(booking.bookingNumber)")
</template>

<script>
  import Cookies from 'js-cookie'
  import Order from '~/components/account/Order'
  import { USER_BOOKINGS } from '~/queries'
  import { DELETE_BOOKING } from '~/mutations'
  import { USER_ID } from '~/constants'

  export default {
    name: 'Profile',
    components: {
      Order
    },
    data: () => ({
      bookings: {},
      loading: 0
    }),
    apollo: {
      bookings: {
        query: USER_BOOKINGS,
        loadingKey: 'loading',
        variables() {
          return {
            user: {
              id: Cookies.get(USER_ID)
            }
          }
        }
      }
    },
    mounted() {
      this.$apollo.queries.bookings.refetch()
    },
    methods: {
      deleteBooking(bookingNumber) {
        this.$apollo.mutate({
          mutation: DELETE_BOOKING,
          variables: {
            bookingNumber
          }
        }).then(() => {
          console.log('Deleted')
          this.$apollo.queries.bookings.refetch()
        }).catch(err => {
          console.error(err)
        })
      }
    },
    middleware: 'auth'
  }
</script>

<style lang="postcss">
  @import 'global/variables';

  #order-history {
    height: 100%;
    padding: 0 20px;
    h4 {
      a {
        color: $blue;
        font-weight: medium;
      }
    }
  }
</style>
