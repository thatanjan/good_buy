import React from 'react'
import styled from 'styled-components'

let ham_burger_length = 4
const HAMBURGER_CONTAINER = styled.ul`
	width: 100%;
	z-index: 5;
	display: grid;
	align-self: center;

	justify-content: center;
	&::last-child {
		margin-bottom: 0rem;
	}

	&:hover {
		cursor: pointer;
	}

	@media (max-width: 320px) {
	}
`

const HAMBURGER_LINES = styled.li`
	width: ${ham_burger_length}rem;
	height: 0.8rem;
	margin-bottom: 0.5rem;
	background: white;
	border-radius: 15%;
`

const HAMBURGER = ({ click }) => {
	return (
		<HAMBURGER_CONTAINER onClick={click}>
			<HAMBURGER_LINES />
			<HAMBURGER_LINES />
			<HAMBURGER_LINES />
		</HAMBURGER_CONTAINER>
	)
}

export default HAMBURGER
