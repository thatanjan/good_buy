import React, { createContext, useReducer } from 'react'

import {
	cart_reducer,
	initial_state,
} from 'reducers/cart_reducers'

export const CART_CONTEXT = createContext()

const THE_CONTEXT = ({ children }) => {
	const the_reducer = useReducer(
		cart_reducer,
		initial_state
	)
	return (
		<CART_CONTEXT.Provider value={the_reducer}>
			{children}
		</CART_CONTEXT.Provider>
	)
}

export default THE_CONTEXT
