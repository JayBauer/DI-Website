import Vuex from 'vuex'
import Cookie from 'js-cookie'
import user from '~/store/modules/user'
import booking from '~/store/modules/booking'

const createStore = () => {
	return new Vuex.Store({
		modules: {
			booking,
			user
		}
	})
}

export default createStore
