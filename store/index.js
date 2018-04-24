import Vuex from 'vuex'
import Cookie from 'js-cookie'
import booking from '~/store/modules/booking'
import { USER_ID } from '~/constants'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      booking
    }
  })
}

export default createStore
