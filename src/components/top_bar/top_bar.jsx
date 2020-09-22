import React, { useState } from 'react'
import styled from 'styled-components'

import SEARCH_BAR from 'components/search_bar/search_bar'
import { global_break } from '../../App.js'
import Loadable from 'react-loadable'

// logos
import AMAZON_LOGO from 'components/logos/amazon'
import CART_LOGO from 'components/cart/cart'

const CONTAINER = styled.div`
	min-height: 10vh;
	max-width: 100vw;
	display: grid;
	grid-template-columns:
		minmax(auto, 7rem) 1fr minmax(auto, 7rem)
		minmax(auto, 7rem);
	grid-template-rows: 10rem 6rem 5rem 5rem;
	// background: aqua;

	& > div {
	}

	.search_bar__container {
		color: white;
		grid-column: 1/5;
		display: grid;
		place-items: center;
	}

	.options {
		grid-column: 1/5;
		background: yellow;
	}

	.user {
		color: white;
		place-self: center;
	}
`
const Loading = () => <div>loading</div>

const NAVIGATION = Loadable({
	loader: () =>
		import('components/navigation/navigation.jsx'),
	loading: Loading,
})

const TOP_BAR = ({ location }) => {
	return (
		<CONTAINER>
			<NAVIGATION />
			<AMAZON_LOGO />
			<div className="user">sign in</div>
			<CART_LOGO />

			<div className="search_bar__container">
				<SEARCH_BAR />
			</div>

			<div className="options">options</div>

			<div className="delivery">delivery</div>
		</CONTAINER>
	)
}

export default TOP_BAR
