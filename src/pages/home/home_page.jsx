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
	return (
		<CONTAINER>
			<PRODUCT_COLLECTION />
			{/* <PRODUCT_COLLECTION /> */}
			{/* <PRODUCT_COLLECTION /> */}
			{/* <div className="the__end"> */}
			{/* you have reach the end{' '} */}
			{/* <span>{`>>`}</span> */}
			{/* </div>{' '} */}
		</CONTAINER>
	)
}

export default HOME
