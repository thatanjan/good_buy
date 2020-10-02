import React from 'react'
import styled from 'styled-components'
// import { NavLink } from 'react-router-dom'
import {
	WRAPPER,
	CONTAINER as container,
} from 'components/wrappers/aspect_ratio_wrapper'

import PRODUCT_DETAILS_SUMMARY from 'components/product_details/product_details'

import IMAGE_PREVIEW from 'components/product_image_preview/product_image_preview'

import FULL_DETAILS from 'components/product_full_details/product_full_details'

import BUY_SECTION from 'components/product_buy_section/product_buy_section'

const CONTAINER = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	margin: 5%;
	max-width: 100vw;
	color: ${({ theme }) => theme.font.color.primary};

	@media (min-width: 768px) {
		grid-template-columns: 3fr 4fr 2fr;
	}
`

const PRODUCT_DETAILS = () => {
	return (
		<CONTAINER>
			<IMAGE_PREVIEW />
			<PRODUCT_DETAILS_SUMMARY />
			<BUY_SECTION />
			<FULL_DETAILS />
		</CONTAINER>
	)
}

export default PRODUCT_DETAILS
