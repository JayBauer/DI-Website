import gql from 'graphql-tag'

export const ME = gql `
  query {
    me {
      id
      email
      password
      firstName
      lastName
      phone
      address1
      address2
      city
      province
      postal
    }
  }
`

export const USER_BOOKINGS = gql `
  query UserBookings($user: UserWhereUniqueInput!) {
    bookings(user: $user) {
      id
      createdAt
      updatedAt
      payment
    }
  }
`

export const GET_BOOKING = gql `
  query Booking($id: ID!) {
    booking(id:$id) {
      id
      createdAt
      updatedAt
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
        maple
        upload {
          filename
        }
      }
      payment
    }
  }
`
