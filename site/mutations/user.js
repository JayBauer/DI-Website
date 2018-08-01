import gql from 'graphql-tag'

export const LOGIN = gql`
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

export const SIGNUP = gql`
	mutation Signup(
		$email: String!
		$password: String!
		$firstName: String!
		$lastName: String!
		$phone: String!
		$address1: String!
		$address2: String!
		$city: String!
		$province: String!
		$postal: String!
	) {
		signup(
			email: $email
			password: $password
			isAdmin: true
			firstName: $firstName
			lastName: $lastName
			phone: $phone
			address1: $address1
			address2: $address2
			city: $city
			province: $province
			postal: $postal
		) {
			token
			user {
				id
			}
		}
	}
`

export const UPDATE_USER = gql`
	mutation UpdateUser(
		$id: ID!
		$firstName: String
		$lastName: String
		$phone: String
		$email: String!
		$address1: String
		$address2: String
		$city: String
		$province: String
		$postal: String
	) {
		updateUser(
			id: $id
			firstName: $firstName
			lastName: $lastName
			phone: $phone
			email: $email
			address1: $address1
			address2: $address2
			city: $city
			province: $province
			postal: $postal
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

export const UPDATE_PASSWORD = gql`
	mutation UpdatePassword($id: ID!, $password: String!) {
		updatePassword(id: $id, password: $password) {
			id
			password
		}
	}
`
