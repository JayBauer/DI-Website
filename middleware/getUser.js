import Cookie from 'js-cookie'
import { USER_ID } from '~/constants'

export default function({ store, route, redirect }) {
  const user = Cookie.get(USER_ID)
  if(!user) {
    if(route.name && route.name.startsWith('account')) {
      redirect('/login')
    }
  }
}
