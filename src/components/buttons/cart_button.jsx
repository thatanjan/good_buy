import React from 'react'
import styled from 'styled-components'

import { useCartContext } from 'hooks/cart_hooks'

const product = {
	name: 'mobile',
	price: 100,
	in_the_cart: false,
}

const CART_BUTTON = ({ in_the_cart }) => {
	const modify_cart = useCartContext()[1]

	let add_to_cart = 'add to cart'
	let delete_from_cart = 'add to cart'

	const add_to_the_cart = (product, event) => {
		let add = { type: add_to_cart, item: product }
		modify_cart(add)
		event.preventDefault()
	}

	const BUTTON = styled.button`
		background: orange;
		padding: 1rem;
	`

	const delete_from_the_cart = (item) => {
		let del = { type: delete_from_cart, item: item }
		modify_cart(del)
	}
	return (
		<BUTTON
			onClick={
				in_the_cart
					? delete_from_the_cart
					: add_to_the_cart.bind(
							null,
							product
					  )
			}
		>
			{in_the_cart
				? 'Remove from the cart'
				: 'Add to the cart'}
		</BUTTON>
	)
}

export default CART_BUTTON
