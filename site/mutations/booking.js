import gql from 'graphql-tag'

export const SAVE_BOOKING = gql `
  mutation UpsertBooking(
    $bookingNumber: String!,
    $user: ID!,
    $bookingFor: BookingFor!,
    $ontarioRes: IsResident!,
    $bodyParts: Json!,
    $waiver: WaiverCreateInput!,
    $referral: ReferralCreateInput,
    $payment: Boolean!,
    $progress: String
  ) {
    saveBooking(
      bookingNumber:$bookingNumber
      user:$user
      bookingFor:$bookingFor
      ontarioRes:$ontarioRes
      bodyParts:$bodyParts
      waiver:$waiver
      referral:$referral
      payment:$payment
      progress:$progress
    ) {
      bookingNumber
      bookingFor
      ontarioRes
      bodyParts
      waiver {
        firstName
        lastName
        date
        agree
      }
      referral {
        pay
        upload {
          id
        }
      }
      payment
      progress
    }
  }
`

export const UPLOAD_FILE = gql `
  mutation UploadFile(
    $file:Upload!,
    $path:String!
  ) {
    uploadFile(
      file:$file,
      path:$path
    ) {
      id
      filename
      url
    }
  }
`

export const PAYMENT = gql `
  mutation NewPayment(
    $source:String!,
    $amount:Float!,
    $currency:String!
  ) {
    makePayment(
      source:$source
      amount:$amount
      currency:$currency
    ) {
      chargedTo {
        user {
          id
        }
      }
    }
  }
`

export const DELETE_BOOKING = gql`
  mutation DeleteBooking($bookingNumber:String!) {
    deleteBooking(bookingNumber:$bookingNumber) {
      bookingNumber
    }
  }
`
