import React, { createContext, useReducer } from 'react'

import {
	state,
	user_auth_reducer,
} from 'reducers/user_auth_reducer'
// import { useUserAuthData } from 'hooks/user_auth'

export const USER_CONTEXT = createContext()

const CONTEXT = ({ children }) => {
	// const user_data = useUserAuthData()
	const auth_reducer = useReducer(
		user_auth_reducer,
		state
	)

	return (
		<USER_CONTEXT.Provider value={auth_reducer}>
			{children}
		</USER_CONTEXT.Provider>
	)
}

export default CONTEXT
