import React from 'react'
import styled from 'styled-components'

let ham_burger_length = 5
const HAMBURGER_CONTAINER = styled.ul`
	width: ${ham_burger_length}rem;
	z-index: 5;
	place-self: center;
	&::last-child {
		margin-bottom: 0rem;
	}

	&:hover {
		cursor: pointer;
	}

	@media (max-width: 320px) {
	}
`

let height = ham_burger_length * 0.16

const HAMBURGER_LINES = styled.li`
	width: ${ham_burger_length}rem;
	height: ${height}rem;
	margin-bottom: ${height}rem;
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
