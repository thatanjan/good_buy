import React from 'react'
import styled from 'styled-components'

// import product_image from 'assets/product_image'
import INDIVIDUAL_PRODUCT from 'components/individual_product/individual_product'

const CONTAINER = styled.section`
	display: grid;
	max-width: 100%;
	// background: teal;
	margin: 0 5%;
	// grid-gap: 5%;

	// @media (min-width: 768px) {
	// 	// margin: 0 10%;
	// }

	@media (min-width: 768px) {
		grid-template-columns: 70% 1fr;
	}
`

const ALL_PRODUCT_CONTAINER = styled.section`
	// background: purple;
	@media (min-width: 768px) {
		grid-column: 1/2;
		grid-row: 1/2;
	}
`

const SUBTOTAL_CONTAINER = styled.section`
	position: sticky;
	top: 0;
	left: 0;
	width: 100%;
	padding: 1rem;
	display: grid;
	// background: red;
	// color: ${({ theme }) => theme.font.color.primary};

	& .__contains_gift__text {
		display: inline;
		margin-left: 1rem;
	}

	> div {
		padding: 0.8rem 0;
	}

	@media (min-width: 768px) {
		place-self: baseline center;
		max-width: 35rem;
		// width: 80%;
		// height; 10rem;
		& .__subtotal {
			font-size: 1.6rem;
		}

		. __contains_gift__text {
			font-size: 1.3rem;
		}
	}

	@media (min-width: 1024px) {
		& .__subtotal {
			font-size: ${({ theme }) =>
				theme.small_screen.lg};
		}
	}
`
const CHECKOUT_BUTTON = styled.button`
	width: 80%;
	max-width: 30rem;
	background: orange;
	place-self: center;
	padding: 1rem 2rem;

	@media (min-width: 1024px) {
		padding: 1rem;
		width: auto;
		max-width: auto;
	}
`

const CART_PAGE = () => {
	return (
		<CONTAINER>
			{/* subtotal start */}
			<SUBTOTAL_CONTAINER>
				<div className="__subtotal">
					Subtotal (4 items): $844.09
				</div>
				<div className="__contains_gift">
					<input
						className="__gift__checkbox"
						type="checkbox"
					/>
					<div className="__contains_gift__text">
						This order contains a gift
					</div>
				</div>

				<CHECKOUT_BUTTON children="procced to checkout" />
			</SUBTOTAL_CONTAINER>

			{/* subtotal finish */}

			{/* products start */}
			<ALL_PRODUCT_CONTAINER>
				<INDIVIDUAL_PRODUCT />
				<INDIVIDUAL_PRODUCT />
				<INDIVIDUAL_PRODUCT />
				<INDIVIDUAL_PRODUCT />
				<INDIVIDUAL_PRODUCT />
				<INDIVIDUAL_PRODUCT />
				<INDIVIDUAL_PRODUCT />
			</ALL_PRODUCT_CONTAINER>
		</CONTAINER>
	)
}

export default CART_PAGE
