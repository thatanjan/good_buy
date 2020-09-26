import React from 'react'
import styled from 'styled-components'

import product_image from 'assets/product_image.jpg'

const CONTAINER = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	margin: 5%;
	max-width: 100vw;
	color: white;
`

const WRAPPER = styled.div`
	position: relative;
	padding-top: 70%;
	justify-self: center;
	height: 100%;
	width: 100%;
`

const PRODUCT_IMAGE_PREVIEW = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
`

const MAIN_PREVIEW_IMAGE = styled.img`
	height: 85%;
	width: 100%;
`

const PREVIEW_COLLECTION = styled.div`
	display: flex;
	height: 15%;
	justify-content: center;

	& img {
		height: 50%;
		margin-left: 2%;
	}
`

const PRODUCT_DEATILS_SUMMARY = styled.div`
	& > div {
		padding: 0.5rem 0;
	}
`

const PRODUCT_TITLE = styled.h2`
	font-size: 2rem;
`

const PRODUCT__REVIEW__SUMMARY = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);

	& > * {
		padding: 1rem 0;
	}
`

const CHOICE = styled.button`
	background: orange;
	width: 40%;
	display: grid;
	place-items: center;
	padding: 1rem;
`

const BUY_SECTION = styled.section`
	margin: 2rem 0;
	border: 1px solid;
	background: #171717;
	padding: 5rem;
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

		& button {
			width: 45%;
		}
	}
`

const QUANTITY = styled.div`
	.quantity {
		margin-bottom: 0.8rem;
	}

	.quantity_input {
		width: 100%;
	}
`

const CART_SECTION_BUTTON = styled(CHOICE)`
	width: 50%;
	background: red;
	color: inherit;
`

const summary = [
	{
		brand: 'lG',
	},
	{
		series: 'lG ultra pc',
	},
	{
		display_size: '17 inches',
	},
	{
		operating_system: 'windows 10 home',
	},
	{
		processor_count: '4',
	},
]

const DESCRIPTION = styled.div`
	margin: 1rem 0;
	font-size: 1.3rem;
`

const FULL_DETAILS = styled.section`
	h1 {
		font-size: 2rem;
		margin-bottom: 1rem;
	}
`

const SHIPPING_DETAILS = styled.div``

const BUY_USED = styled.div`
	display: grid;
	grid-template-columns: 1fr 10fr 1fr;
	place-items: center self-start;
`

const PRODUCT_DETAIL = () => {
	return (
		<CONTAINER>
			<WRAPPER>
				<PRODUCT_IMAGE_PREVIEW>
					<MAIN_PREVIEW_IMAGE
						src={product_image}
					/>
					<PREVIEW_COLLECTION>
						<img
							src={product_image}
							alt=""
						/>
						<img
							src={product_image}
							alt=""
						/>
						<img
							src={product_image}
							alt=""
						/>
						<img
							src={product_image}
							alt=""
						/>
					</PREVIEW_COLLECTION>
				</PRODUCT_IMAGE_PREVIEW>
			</WRAPPER>
			<PRODUCT_DEATILS_SUMMARY>
				<h3 className="product__store">
					visit the nike store
				</h3>
				<PRODUCT_TITLE children="Nike Men's Revolution 5 Running Shoe" />
				<PRODUCT__REVIEW__SUMMARY>
					<div className="reviews">
						12000 reviews
					</div>
					<div className="stars">4.5</div>
					<div className="answered">
						123 questions answered
					</div>
					<div className="comments">
						1435 comments
					</div>
				</PRODUCT__REVIEW__SUMMARY>

				<CHOICE children="choice" />
				<DESCRIPTION>
					Brand: LG Series LG Ultra PC <br />
					Display Size: 17 Inches Operating
					<br />
					System: Windows 10 Home Processor
					<br />
					Count 4
				</DESCRIPTION>
				<div className="compare__similar">
					compare with similar items
				</div>
				<div className="report">
					report incorrect product
					description
				</div>
			</PRODUCT_DEATILS_SUMMARY>

			<BUY_SECTION>
				<h1 className="price">$299</h1>
				<div className="can_ship">
					This item cannot be shipped to your
					selected delivery location. Please
					choose a different delivery
					location.
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

			<FULL_DETAILS>
				<h1 className="details__header">
					details
				</h1>

				<div className="the__details">
					Imported Synthetic Shaft measures
					approximately low-top from arch
					REVOLUTIONARY COMFORT: The Nike
					Revolution 5 men's running shoes
					cushion your stride with soft foam
					to keep you running in comfort.
					Minimalist design fits in just
					about anywhere your day takes you.
					BREATHABLE SUPPORT: These Nike
					men's shoes have lightweight knit
					textile that wraps your foot in
					breathable comfort. Reinforced heel
					and overlays lend support and
					durability. LIGHTWEIGHT CUSHIONING:
					Soft foam midsole delivers a
					smooth, stable ride, making these
					the running shoes men need.
					Textured outer wall reduces the
					weight of the shoe. DURABLE &
					FLEXIBLE TRACTION: These Nike shoes
					are made with rubber outsoles,
					offering durable traction on a
					variety of surfaces. Spacing in the
					tread lets your foot flex
					naturally. MEN'S RUNNING SHOES:
					Lightweight knit wraps foot, foam
					midsole, rubber outsole, plush
					lining, soft sockliner.
				</div>
			</FULL_DETAILS>
		</CONTAINER>
	)
}

export default PRODUCT_DETAIL
