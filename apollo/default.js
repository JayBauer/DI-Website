import { ApolloClient } from 'apollo-client'
import { ApolloLink, concat } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import Cookie from 'js-cookie'

import { AUTH_TOKEN } from '~/constants'

export default (ctx) => {
  const httpLink = new HttpLink({ uri: 'http://165.227.33.8:4000/' })

  const authLink = setContext((_, { headers }) => {
    const token = Cookie.get(AUTH_TOKEN)
    return {
      headers: {
        authorization: token ? `Bearer ${token}` : null,
      }
    }
  })

  return {
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    connectToDevTools: true
  }
}


// export default (ctx) => {
//   const httpLink = new HttpLink({ uri: 'http://165.227.33.8:4000/' })
//
//
//   // middleware
//   const middlewareLink = new ApolloLink((operation, forward) => {
//     const token = process.server ? ctx.req.session : window.localStorage.getItem(AUTH_TOKEN)
//
//     operation.setContext({
//       headers: { authorization: `Bearer ${token}` }
//     })
//     return forward(operation)
//   })
//   const link = httpLink
//   return {
//     link,
//     cache: new InMemoryCache()
//   }
// }
