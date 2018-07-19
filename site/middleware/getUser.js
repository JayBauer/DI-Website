import Cookie from 'js-cookie'
import { USER_ID } from '~/constants'

export default function ({ store }) {
  const loggedUser = Cookie.get(USER_ID) || null
  if (process.server) return
  if (loggedUser) {
    store.commit('setUser', loggedUser)
  }
}
