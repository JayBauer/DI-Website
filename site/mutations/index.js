import gql from 'graphql-tag'

export const LOGIN = gql `
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        email
        firstName
      }
    }
  }
`

export const SIGNUP = gql `
  mutation Signup(
    $email: String!,
    $password: String!,
    $firstName: String!,
    $lastName: String!,
    $phone: String!,
    $address1: String!,
    $address2: String!,
    $city: String!,
    $province: String!,
    $postal: String!
  ) {
    signup (
      email: $email,
      password: $password,
      isAdmin: true,
      firstName: $firstName,
      lastName: $lastName,
      phone: $phone,
      address1: $address1,
      address2: $address2,
      city: $city,
      province: $province,
      postal: $postal
    ) {
      token
      user {
        id
      }
    }
  }
`

export const UPDATE_USER = gql `
  mutation UpdateUser(
    $id:ID!,
    $firstName: String,
    $lastName: String,
    $phone: String,
    $email: String!,
    $address1: String,
    $address2: String,
    $city: String,
    $province: String,
    $postal: String
  ) {
    updateUser(
      id:$id,
      firstName:$firstName,
      lastName:$lastName,
      phone:$phone,
      email:$email,
      address1:$address1,
      address2:$address2,
      city:$city,
      province:$province,
      postal:$postal
    ) {
      id
      firstName
      lastName
      phone
      email
      address1
      address2
      city
      province
      postal
    }
  }
`

export const UPDATE_PASSWORD = gql `
  mutation UpdatePassword(
    $id:ID!,
    $password:String!
  ) {
    updatePassword(
      id:$id,
      password:$password
    ) {
      id
      password
    }
  }
`

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

export const DELETE_BOOKING = gql`
  mutation DeleteBooking($id:ID!) {
    deleteBooking(id:$id) {
      id
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
