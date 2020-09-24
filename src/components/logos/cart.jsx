import React from 'react'
import styled from 'styled-components'

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
`

const CART = () => {
	return (
		<CONTAINER>
			<CART_LOGO />
		</CONTAINER>
	)
}

export default CART
