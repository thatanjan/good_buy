import React from 'react'
import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

import QUANTITY_INPUT from 'components/quantity_input/quantity_input'

import product_image from 'assets/product_image.jpg'

const CONTAINER = styled.section`
	display: grid;
	max-width: 100%;
	background: teal;
	margin: 0 5%;

	// @media (min-width: 768px) {
	// 	margin: 0 10%;
	// }

	// @media (min-width: 768px) {
	// 	grid-template-columns: 75% 1fr;
	// }
`

const SUBTOTAL_CONTAINER = styled.section`
	height: 10rem;
	background: blue;
`

const PRODUCTS_CONTAINER = styled.section`
	height: 15rem;
	background: cyan;
	display: grid;
	grid-template-columns: minmax(30%, 15rem) 1fr;
	grid-template-rows: 70% 30%;
`

const PRODUCT_IMAGE = styled.img`
	max-height: 90%;
	width: 90%;
	place-self: center;
	object-fit: cover;
`

const PRODUCT_INFORMATION = styled.div`
	background: teal;
	max-width: 100%;
	display: grid;
	grid-template-rows: repeat(3, auto);
	padding: 0 1rem;
`

const PRODUCT_TITLE = styled.h1`
	/* background: #ce0044; */
	overflow: hidden;
	/* text-overflow: clip; */
	text-overflow: ellipsis;
	font-size: 1rem;
	line-height: 2rem;
	max-height: 6rem;
`

const PRICE = styled.h3`
	font-size: 1.5rem;
	padding: 0.5rem 0;
`

const STAR = styled(NavLink)`
	padding: 0.5rem 0;
`

const CART_PAGE = () => {
	return (
		<CONTAINER>
			<SUBTOTAL_CONTAINER></SUBTOTAL_CONTAINER>
			<PRODUCTS_CONTAINER>
				<PRODUCT_IMAGE src={product_image} />
				<PRODUCT_INFORMATION>
					<PRODUCT_TITLE
						children="nike Dolor quisquam ut ullam eaque eum facilis vero? Eveniet veritatis!lorem100

					   "
					/>
					<PRICE children="$5" />
					<STAR children="4" to="" />
				</PRODUCT_INFORMATION>
				<QUANTITY_INPUT></QUANTITY_INPUT>
			</PRODUCTS_CONTAINER>
		</CONTAINER>
	)
}

export default CART_PAGE
