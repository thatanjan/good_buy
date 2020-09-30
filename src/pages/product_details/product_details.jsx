import React from 'react'
import styled from 'styled-components'

import {
	WRAPPER,
	CONTAINER as container,
} from 'components/wrappers/aspect_ratio_wrapper'

import IMAGE_PREVIEW from 'components/product_image_preview/product_image_preview'

const CONTAINER = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	margin: 5%;
	max-width: 100vw;
	color: ${({ theme }) => theme.font.color.primary};
	// background: orange;
`

const PRODUCT_DETAILS = () => {
	return (
		<CONTAINER>
			<IMAGE_PREVIEW />
		</CONTAINER>
	)
}

export default PRODUCT_DETAILS
