import React from 'react'
import styled from 'styled-components'

import PRODUCT_COLLECTION from 'components/product_collection/product_collection'
import FOOTER from 'components/footer/footer'

const CONTAINER = styled.div`
	height: auto;
	max-width: 100vw;

	& .the__end {
		height: 4rem;
		width: 100vw;
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		background: black;

		.arrow-up {
			margin-left: 1rem;
			width: 0;
			height: 0;
			border-left: 5px solid transparent;
			border-right: 5px solid transparent;
			border-bottom: 10px solid white;
		}
	}
`

const HOME = () => {
	// scroll back to top
	const go_to_top = (event) => {
		document.body.scrollTop = 0 // For Safari
		document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
		event.preventDefault()
	}

	return (
		<CONTAINER>
			<PRODUCT_COLLECTION />
			<PRODUCT_COLLECTION />
			<PRODUCT_COLLECTION />
			<button
				className="the__end"
				onClick={go_to_top}
			>
				you have reach the end{' '}
				<div className="arrow-up"></div>
			</button>

			{/* the footer */}
			<FOOTER />
		</CONTAINER>
	)
}

export default HOME
