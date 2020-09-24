import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import shortid from 'shortid'

const CONTAINER = styled.nav`
	grid-column: 1/5;
	height: 100%;
	width: 100%;
	background: rgb(226, 126, 8);
	background: linear-gradient(
		180deg,
		rgba(226, 126, 8, 1) 0%,
		rgba(148, 101, 1, 1) 100%
	);

	overflow: auto;
	white-space: nowrap;

	@media (min-width: 800px) {
		display: flex;
		align-items: start;
		justify-content: center;
	}

	& > a {
		display: inline-block;
		padding: 1rem;
		position: relative;
		top: 50%;
		transform: translateY(-50%);
		color: white;
	}
`

const items = [
	"today's deals",
	'amazon.com',
	'customer service',
	'browsing history',
	'gift cards',
	'buy again',
	'registry',
	'sell',
]

const OPTIONS = () => {
	return (
		<CONTAINER>
			{items.map((item) => (
				<NavLink
					to=""
					children={item}
					key={shortid.generate()}
				/>
			))}
		</CONTAINER>
	)
}

export default OPTIONS
