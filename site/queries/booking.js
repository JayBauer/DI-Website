import gql from 'graphql-tag'

export const USER_BOOKINGS = gql `
  query UserBookings($user: UserWhereUniqueInput!) {
    bookings(user: $user) {
      bookingNumber
      createdAt
      updatedAt
      payment
    }
  }
`

export const GET_BOOKING = gql `
  query Booking($bookingNumber: String!) {
    booking(bookingNumber:$bookingNumber) {
      createdAt
      updatedAt
      bookingNumber
      bookingFor
      ontarioRes
      bodyParts
      waiver {
        party
        otherParty
        agree
        firstName
        lastName
        date
      }
      referral {
        pay
        upload {
          filename
          url
        }
      }
      payment
      progress
    }
  }
`
