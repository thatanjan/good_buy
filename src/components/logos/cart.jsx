import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { ReactComponent as CART_LOGO } from 'assets/svgs/shopping-cart.svg'

const CONTAINER = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	justify-content: end;
	padding: 0 2vh;

	& > svg {
		place-self: center;
		max-width: none;
		height: 5vh;
		min-height: 4rem;
	}
	a {
		align-self: center;
	}
`

const CART = () => {
	return (
		<CONTAINER>
			<NavLink to="/cart">
				<CART_LOGO />
			</NavLink>
		</CONTAINER>
	)
}

export default CART
