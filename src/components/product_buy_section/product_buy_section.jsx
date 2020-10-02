import React from 'react'
import styled from 'styled-components'

const BUY_SECTION = styled.section`
	color: ${({ theme }) => theme.font.color.primary};

	margin: 2rem 0;
	border: 1px solid;
	background: #171717;
	padding: 10%;
	& > * {
		margin-bottom: 1rem;
	}

	.price {
		font-size: 3rem;
		margin-bottom: 2rem;
	}
	.cart_buttons {
		display: flex;
		flex-flow: wrap;
		justify-content: space-between;

		// & button {
		// 	flex-basis: 45%;
		// }
	}

	@media (min-width: 1024px) {
		padding: 10%;
	}
`

const QUANTITY = styled.div`
	width: 100%;
	& .quantity {
		margin-bottom: 0.8rem;
	}
	.quantity__input {
		width: 100%;
		margin: 0 auto;
	}
`

const CART_SECTION_BUTTON = styled.button`
	flex-basis: 70%;
	// background: yellow;
	background: ${({ theme }) =>
		theme.button.background.primary};
	color: inherit;
	margin-bottom: 1rem;
	padding: 1rem;
`

const SHIPPING_DETAILS = styled.div``

const BUY_USED = styled.div`
	display: grid;
	grid-template-columns: 1fr 10fr 1fr;
	place-items: center self-start;
`

const PRODUCT_BUY_SECTION = () => {
	return (
		<BUY_SECTION>
			<h1 className="price">$299</h1>
			<div className="can_ship">
				This item cannot be shipped to your
				selected delivery location. Please
				choose a different delivery location.
			</div>
			<div className="stock">stock</div>
			<QUANTITY>
				<div className="quantity">
					quantity:{' '}
				</div>
				<input
					className="quantity__input"
					id=""
					type="text"
					name=""
				/>
			</QUANTITY>
			<div className="cart_buttons">
				<CART_SECTION_BUTTON children="add to cart" />
				<CART_SECTION_BUTTON children="add to list" />
			</div>
			<div className="secure__transaction">
				secure transaction
			</div>
			<SHIPPING_DETAILS>
				<div className="ship__from">
					ship from:
					<span className="shipper">
						amazon
					</span>
				</div>

				<div className="sold__buy">
					sold__buy:
					<span className="shipper">
						Nike
					</span>
				</div>
			</SHIPPING_DETAILS>
			<input
				id=""
				className="add__gift"
				type="checkbox"
				name=""
			/>{' '}
			<span className="gift_options">
				add gift options
			</span>
			<BUY_USED>
				<input
					id=""
					className="buy__used__check"
					type="checkbox"
					name=""
				/>
				<span className="buy__used">
					buy used
				</span>
				<span className="used__price">
					$1200
				</span>
			</BUY_USED>
		</BUY_SECTION>
	)
}

export default PRODUCT_BUY_SECTION
