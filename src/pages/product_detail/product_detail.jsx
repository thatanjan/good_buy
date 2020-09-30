import React from 'react'
import styled from 'styled-components'

// componnents
import PRODUCT_BUY_SECTION from 'components/product_buy_section/product_buy_section'
import PRODUCT_DETAILS from 'components/product_details/product_details'
import PRODUCT_IMAGE_PREVIEW from 'components/product_image_preview/product_image_preview'

const CONTAINER = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	margin: 5%;
	max-width: 100vw;
	color: white;

	@media (min-width: 1024px) {
		grid-template-rows: minmax(5rem, auto) 1fr;
		grid-template-columns: auto 40% 20%;
	}
`

const FULL_DETAILS = styled.section`
	h1 {
		font-size: 2rem;
		margin-bottom: 1rem;
	}
	@media (min-width: 1024px) {
		grid-columns: 1/4;
	}
`

const PRODUCT_DETAIL = () => {
	return (
		<CONTAINER>
			<PRODUCT_IMAGE_PREVIEW />
			<PRODUCT_DETAILS />
			<PRODUCT_BUY_SECTION />
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
