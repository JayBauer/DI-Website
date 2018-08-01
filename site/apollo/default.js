import { ApolloClient } from 'apollo-client'
import { ApolloLink, concat } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { createUploadLink } from 'apollo-upload-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import Cookie from 'js-cookie'

import { AUTH_TOKEN } from '~/constants'

export default ctx => {
	const httpLink = new createUploadLink({
		uri: `${process.env.SERVER_IP}:${process.env.SERVER_PORT}`
	})
	console.log(
		`Apollo attached to URI -> ${process.env.SERVER_IP}:${
			process.env.SERVER_PORT
		}`
	)

	const authLink = setContext((_, { headers }) => {
		const token = Cookie.get(AUTH_TOKEN)
		return {
			headers: {
				authorization: token ? `Bearer ${token}` : null
			}
		}
	})

	return {
		link: authLink.concat(httpLink),
		cache: new InMemoryCache(),
		connectToDevTools: true
	}
}
