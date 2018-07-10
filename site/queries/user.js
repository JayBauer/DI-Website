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
