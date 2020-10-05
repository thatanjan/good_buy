import React, { useState } from 'react'
import styled from 'styled-components'

const CONTAINER = styled.div`
	// background: blue;
	display: grid;
	grid-template-columns: 2fr 6fr 2fr;
	// width: 15rem;
	// height: 50%;
	align-self: center;
`

const INPUT_BOX = styled.input`
	width: 100%;
	border: none;
	padding: ${({ theme }) => theme.small_screen.xsm};
	text-align: center;
`

const BUTTON = styled.button`
	color: white;
	font-size: 2rem;
`

const QUANTITY_INPUT = () => {
	const [
		initial_quantity,
		set_initial_quantity,
	] = useState(11)

	const add_substract = (a) => {
		if (a === '+')
			set_initial_quantity(initial_quantity + 1)
		if (a === '-')
			set_initial_quantity(initial_quantity - 1)
		// console.log(12)
	}

	// const substract = () => {{ target: { value } }}

	return (
		<CONTAINER>
			<BUTTON
				children="-"
				onClick={add_substract}
			/>
			<INPUT_BOX
				type="text"
				value={initial_quantity}
			/>
			<BUTTON children="+" />
		</CONTAINER>
	)
}

export default QUANTITY_INPUT
