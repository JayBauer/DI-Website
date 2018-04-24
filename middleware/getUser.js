import Cookie from 'js-cookie'
import { USER_ID } from '~/constants'

export default function({ store, redirect, route, req, res }) {
  const user = Cookie.get(USER_ID)
  console.log(user)
  store.dispatch('updateId', user)
  // if(user) {
  //   if(route.name == 'login') {
  //     redirect('/account')
  //   }
  // }
}
