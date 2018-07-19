import Cookie from 'js-cookie'
import { USER_ID, AUTH_TOKEN } from '~/constants'

const state = {
  user: null,
  userName: null
}

const getters = {
  currentUser: state => state.user,
  isAuthenticated: state => !!state.user,
  userName: state => state.userName
}

const mutations = {
  setUser(state, user) {
    state.user = user || null
  },
  setName(state, userName) {
    state.userName = userName || null
  },
  login(state, { id, token }) {
    state.user = id || null
    if (process.browser) {
      Cookie.set(USER_ID, id, { expires: 7 })
      Cookie.set(AUTH_TOKEN, token, { expires: 7 })
    }
  },
  logout(state) {
    state.userName = null
    state.user = null
    if (process.browser) {
      Cookie.remove(USER_ID)
      Cookie.remove(AUTH_TOKEN)
    }
  }
}

const actions = {
  setUser({ commit }, payload) {
    commit('setUser', payload)
  },
  setName({ commit }, payload) {
    commit('setName', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
