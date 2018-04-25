<template lang="pug">
  section#order-history.account-page
    template(v-if="loading > 0")
      h4 Loading...
    template(v-if="bookings.length == 0")
      h4 You haven't booked a scan yet! #[nuxt-link(:to="{ name: 'booking-id', params: { id: 'new' } }") Click here] to begin.
    template(v-else)
      div.single-order.single-order--headers
        h4 Date Created
        h4 Booking Number
        h4 Status
      div(v-for="booking in bookings")
        Order(:id="booking.id" :date="booking.updatedAt" :status="booking.payment" :key="booking.id")
</template>

<script>
  import Cookies from 'js-cookie'
  import Order from '~/components/account/Order'
  import { USER_BOOKINGS } from '~/queries'
  import { USER_ID } from '~/constants'

  export default {
    name: 'Profile',
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
    components: {
      Order
    }
  }
</script>

<style lang="postcss">
  @import 'global/variables';

  h4 {
    a {
      color: $blue;
      font-weight: medium;
    }
  }
  #order-history {
    height: 100%;
  }
</style>
