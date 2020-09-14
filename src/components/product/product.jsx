import React from 'react'
import styled from 'styled-components'

import CART_BUTTON from 'components/buttons/cart_button'

const PRODUCT_CONTAINER = styled.div`
	background: aqua;
	width: 100%;
	height: 30rem;
	display: grid;
	place-items: center;
`

const PRODUCT_IMAGE_CONTAINER = styled.div``

const PRODUCT_IMAGE = styled.img``

const PRODUCT_TITLE = styled.p``

const PRODUCT_RATING = styled.p``

const PRODUCT = ({ image, title, rating }) => {
	return (
		<PRODUCT_CONTAINER>
			<PRODUCT_IMAGE_CONTAINER>
				<PRODUCT_IMAGE src={image} />
			</PRODUCT_IMAGE_CONTAINER>
			<PRODUCT_RATING children={rating} />
			<PRODUCT_TITLE children={title} />
			<CART_BUTTON />
		</PRODUCT_CONTAINER>
	)
}

export default PRODUCT
