import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import shortid from 'shortid'

const FOOTER_ONE = styled.div`
	width: 100vw;
	background: rgb(32, 32, 32);
	background: linear-gradient(
		180deg,
		rgba(32, 32, 32, 1) 0%,
		rgba(18, 22, 61, 0.7245098723082983) 100%
	);
	display: grid;
	grid-template-columns: repeat(
		auto-fit,
		minmax(15rem, 1fr)
	);
	place-content: center;

	.link__wrapper {
		padding: 1.5rem 0;
		padding-left: 1rem;
		font-size: 1rem;
	}

	@media (min-width: 900px) {
		grid-template-columns: repeat(
			auto-fit,
			minmax(30rem, 30rem)
		);
	}
`

const FOOTER_TWO = styled.div``

const footer_one_data = [
	'Amazon.com',
	'your orders',
	'your Lists',
	'gift cards & Registry',
	'find a gift',
	'your account',
	'your subscribe and save',
	'browsing history',
	'sell products on Amazon',
	'your recomendations',
	'returns',
	'1-click settings',
	'customer service',
	'help',
]

const FOOTER = () => {
	return (
		<>
			<FOOTER_ONE>
				{footer_one_data.map((item) => (
					<div class="link__wrapper">
						<NavLink
							to=""
							children={item}
							key={shortid.generate()}
						/>
					</div>
				))}
			</FOOTER_ONE>
			<FOOTER_TWO />
		</>
	)
}

export default FOOTER
