import Cookie from 'js-cookie'
import { USER_ID } from '~/constants'

export default function({ store, error, redirect }) {
  let isAuth = store.getters.isAuthenticated
  if(!isAuth && process.browser) {
    return redirect('/login')
  }
}
