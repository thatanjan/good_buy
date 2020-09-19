import React, {
	useEffect,
	useState,
	createContext,
} from 'react'

import { auth } from 'utils/firebase_utils/firebase_setup'

export const USER_CONTEXT = createContext()

const CONTEXT = ({ children }) => {
	const [user_state, set_user_state] = useState(null)

	const [is_logged_in, set_is_logged_in] = useState(
		false
	)

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				console.log(user)
				set_is_logged_in(true)
				set_user_state(user)
			} else {
				console.log('no user')
			}
		})
	}, [])

	const context_value = [
		[user_state, set_user_state],
		[is_logged_in, set_is_logged_in],
	]

	return (
		<USER_CONTEXT.Provider value={context_value}>
			{children}
		</USER_CONTEXT.Provider>
	)
}

export default CONTEXT
