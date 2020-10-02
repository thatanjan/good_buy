import React from 'react'
import styled from 'styled-components'
import {
	WRAPPER,
	CONTAINER as image_preview_container,
} from 'components/wrappers/aspect_ratio_wrapper'

import product_image from 'assets/product_image.jpg'

// for the image preview

// const IMAGE_PREVIEW_WRAPPER = styled(WRAPPER)`
// `;
const IMAGE_PREVIEW_WRAPPER = styled(WRAPPER)`
	padding-top: 80%;
	margin: 2rem 0;

	@media (min-width: 768px) {
		padding-top: 75%;
		align-self: baseline;
	}
`

const IMAGE_PREVIEW_CONTAINER = styled(
	image_preview_container
)`
	display: grid;
	grid-template-rows: 10fr 1fr;
`

// for the main image
const MAIN_PREVIEW_IMAGE = styled.img`
	cursor: pointer;
	width: 100%;
	height: 100%;
	// object-fit: cover;
`
const MORE_IMAGE_PREVIEW = styled.section`
	height: 100%;
	width: 50%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	place-items: end center;
	margin: 0 auto;

	& > .more__preview {
		height: 60%;
		width: 60%;
		cursor: pointer;
	}

	.active {
		border: 1px solid white;
	}
`

const CONTAINER = () => {
	return (
		<IMAGE_PREVIEW_WRAPPER>
			<IMAGE_PREVIEW_CONTAINER>
				<MAIN_PREVIEW_IMAGE
					src={product_image}
				/>

				<MORE_IMAGE_PREVIEW>
					<img
						className="more__preview"
						src={product_image}
						alt=""
					/>
					<img
						className="more__preview"
						src={product_image}
						alt=""
					/>
					<img
						className="more__preview"
						src={product_image}
						alt=""
					/>
					<img
						className="more__preview active"
						src={product_image}
						alt=""
					/>
				</MORE_IMAGE_PREVIEW>
			</IMAGE_PREVIEW_CONTAINER>
		</IMAGE_PREVIEW_WRAPPER>
	)
}

export default CONTAINER
