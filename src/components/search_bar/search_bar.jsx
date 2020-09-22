import React from 'react'
import styled from 'styled-components'

import { ReactComponent as SEARCH_ICON } from 'assets/svgs/search.svg'

const CONTAINER = styled.form`
	height: 100%;
	max-height: 4rem;
	width: 80%;
	display: grid;
	grid-template-columns: 1fr minmax(10px, 10%);
	place-items: center;

	& > input {
		height: 100%;
		width: 100%;
		border: none;
		border: 1px solid gray;
		padding: 10px;
	}

	.search_button {
		height: 100%;
		width: 100%;
		background: teal;
		display: grid;
		place-items: center;
	}

	svg {
		max-width: 2.6rem;
		fill: white;
	}
`

const SEARCH_BAR = () => {
	return (
		<CONTAINER>
			<input type="text" />
			<button className="search_button">
				<SEARCH_ICON />
			</button>
		</CONTAINER>
	)
}

export default SEARCH_BAR
