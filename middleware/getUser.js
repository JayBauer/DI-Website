import Cookie from 'js-cookie'
import { USER_ID } from '~/constants'

export default function ({ store, req, redirect }) {
  const loggedUser = Cookie.get(USER_ID) || null
  if(loggedUser) store.commit('setUser', loggedUser)
}
