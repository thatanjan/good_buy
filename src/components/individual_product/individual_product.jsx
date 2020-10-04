import React from 'react'
import styled from 'styled-components'
import { NavLink, withRouter } from 'react-router-dom'

import {
	IMAGE_PREVIEW_CONTAINER,
	IMAGE_PREVIEW_WRAPPER,
	MAIN_PREVIEW_IMAGE,
} from 'components/product_image_preview/product_image_preview'

import product_image from 'assets/product_image.jpg'

import QUANTITY_INPUT from 'components/quantity_input/quantity_input'

const CONTAINER = styled.div`
	width: 100%;
	// background: yellow;
	display: grid;
	grid-template-columns: 3fr 4fr;

	// @media (min-width: 414px) {
	// 	grid-template-columns: 2fr 4fr;
	// }

	// @media (min-width: 540px) {
	// 	grid-template-rows: 2fr 1fr;
	// }ff
`

const IMAGE_WRAPPER = styled(IMAGE_PREVIEW_WRAPPER)`
	// padding-top: 50%;
	margin: 0;
	grid-row: 1/3;
	width: 100%;
	justify-self: center;

	@media (min-width: 414px) {
	}
`

const IMAGE_CONTAINER = styled(IMAGE_PREVIEW_CONTAINER)`
	grid-template-rows: 1fr;
	padding: 1rem;
`

const PRODUCT_IMAGE = styled(MAIN_PREVIEW_IMAGE)`
	height: auto;
`

// information about the product

const PRODUCT_INFORMATION = styled.section`
	padding: 1rem;
	display: grid;
	grid-template-rows: 8rem 1fr 1fr;
	// display: flex;
	// flex-direction: column;
	// justify-content: space-between;
`
const PRODUCT_TITLE = styled(NavLink)`
	// color: ${({ theme }) => theme.font.color.primary};
	margin-bottom: 1rem;
	font-size: ${({ theme }) => theme.small_screen.md};
	text-overflow: clip;
	overflow: hidden;
	line-height: 2.5rem;

	// @media (max-width: 500px) {
	// 	font-size: ${({ theme }) => theme.small_screen.md};
	// }

	// @media (min-width: 1500px) {
	// 	font-size: ${({ theme }) => theme.small_screen.xl}
`

const PRICE = styled.h3`
	font-size: 1.5rem;
`

const STAR = styled(NavLink)``

const EXTRA_BUTTONS_CONTAINER = styled.section`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-column: 1/3;
	align-items: center;

	@media (min-width: 540px) {
		grid-column: 2/3;
	}
`

const BUTTON = styled.button`
	color: white;
	border: 1px solid;
`

const INDIVIDUAL_PRODUCT = ({ location: { pathname } }) => {
	return (
		<CONTAINER>
			<IMAGE_WRAPPER>
				<IMAGE_CONTAINER>
					<PRODUCT_IMAGE
						src={product_image}
					/>
				</IMAGE_CONTAINER>
			</IMAGE_WRAPPER>

			<PRODUCT_INFORMATION>
				<PRODUCT_TITLE
					to=""
					children="nike Dolor quisquam ut ullam eaque eum facilis vero? Eveniet veritatis!"
				/>
				<STAR to="" children="5" />
				<PRICE children="$2330" />
			</PRODUCT_INFORMATION>
			{pathname === '/cart' && (
				<EXTRA_BUTTONS_CONTAINER>
					<QUANTITY_INPUT />
					<BUTTON children="delete" />
					<BUTTON children="save later" />
				</EXTRA_BUTTONS_CONTAINER>
			)}
		</CONTAINER>
	)
}

export default withRouter(INDIVIDUAL_PRODUCT)
