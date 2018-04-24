import Cookie from 'js-cookie'
import { USER_ID, AUTH_TOKEN } from '~/constants'

export default function({ store, route, redirect }) {
  const user = Cookie.get(USER_ID)
  store.dispatch('updateId', user)
  console.log(user)
  let isUser = user ? true : false
  if(!user) {
    store.dispatch('updateId', null)
    if(route.name.startsWith('account')) {
      redirect('/login')
    }
  }
}
