import Cookie from 'js-cookie'
import { USER_ID } from '~/constants'

export default async function({ store, error, redirect, route }) {
	let isAuth = store.getters.isAuthenticated
	if (!isAuth && process.browser) {
		return redirect('/login')
	}
}
