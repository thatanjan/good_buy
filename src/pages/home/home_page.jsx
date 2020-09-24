import React from 'react'
import styled from 'styled-components'

import PRODUCT_COLLECTION from 'components/product_collection/product_collection'

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
		span {
			transform: rotate(-90deg);
			margin-left: 10px;
			font-size: 3vh;
		}
	}
`

const HOME = () => {
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
				<span>{`>>`}</span>
			</button>{' '}
		</CONTAINER>
	)
}

export default HOME
