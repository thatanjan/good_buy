import React from 'react'
import styled from 'styled-components'

import CART_LOGO from 'components/logos/cart'

import { useCartContext } from 'hooks/cart_hooks'

const CONTAINER = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	justify-content: end;

	& > p {
		color: white;
		font-size: 3rem;
		// align-self: center; justify-self: center;
		place-self: center;
	}
`

const CART = () => {
	let cart_state = useCartContext()[0][0].items.length

	return (
		<CONTAINER>
			<CART_LOGO />
			{/* <p>{cart_state[0].items.length}</p> */}
			{/* <p>{cart_state}</p> */}
		</CONTAINER>
	)
}

export default CART
