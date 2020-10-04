import React from 'react'
import styled from 'styled-components'

const CONTAINER = styled.div`
	// background: blue;
	display: grid;
	grid-template-columns: 2fr 6fr 2fr;
	// width: 15rem;
	// grid-column: 1/3;
`

const INPUT_BOX = styled.input`
	width: 100%;
	border: none;
	padding: ${({ theme }) => theme.small_screen.xsm};
`

const BUTTON = styled.button`
	color: white;
	font-size: 2rem;
`

const QUANTITY_INPUT = () => {
	return (
		<CONTAINER>
			<BUTTON children="-" />
			<INPUT_BOX type="text" />
			<BUTTON children="+" />
		</CONTAINER>
	)
}

export default QUANTITY_INPUT
