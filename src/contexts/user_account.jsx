import React, {
	useEffect,
	useState,
	createContext,
	useReducer,
} from 'react'

import {
	state,
	user_auth_reducer,
} from 'reducers/user_auth_reducer'
// import { useUserAuthData } from 'hooks/user_auth'

export const USER_CONTEXT = createContext()

const CONTEXT = ({ children }) => {
	const [the_state, set_the_state] = useState(null)

	// const user_data = useUserAuthData()
	const [user_state, set_user_state] = useReducer(
		user_auth_reducer,
		state
	)

	useEffect(() => {
		if (user_state.then)
			user_state.then((res) => set_the_state(res))
	}, [user_state])

	// user_state

	return (
		<USER_CONTEXT.Provider
			value={[the_state, set_user_state]}
		>
			{children}
		</USER_CONTEXT.Provider>
	)
}

export default CONTEXT
