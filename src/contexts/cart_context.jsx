import React, { createContext, useReducer } from 'react'

import modifier from 'reducers/cart_reducers'

const CONTEXT = createContext()

const initial_state = [
	{
		total_price: 0,
		total_items: 0,
	},
]

const [cart_state, modify_cart] = useReducer(
	modifier,
	initial_state
)

const CART_CONTEXT = ({ children }) => {
	return (
		<CONTEXT.Provider value={cart_state}>
			{children}
		</CONTEXT.Provider>
	)
}

export default CART_CONTEXT
