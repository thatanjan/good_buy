import React, { useState } from 'react'
import styled from 'styled-components'

import { global_break } from '../../App.js'
import Loadable from 'react-loadable'

// logos
import AMAZON_LOGO from 'components/logos/amazon'
import CART_LOGO from 'components/cart/cart'

const CONTAINER = styled.div`
	min-height: 10vh;
	max-width: 100vw;
	display: grid;
	grid-template-columns: 30% 1fr 30%;
	// background: aqua;
`
const Loading = () => <div>loading</div>

const NAVIGATION = Loadable({
	loader: () =>
		import('components/navigation/navigation.jsx'),
	loading: Loading,
})

const TOP_BAR = ({ location }) => {
	// state of window size
	const [window_state, set_window_state] = useState(
		window.innerWidth <= global_break ? true : false
	)

	// resize window function
	let resize_function = () => {
		if (window.innerWidth <= global_break)
			return set_window_state(true)
		if (window.innerWidth > global_break)
			return set_window_state(false)
	}

	window.addEventListener('resize', resize_function)
	return (
		<CONTAINER>
			<NAVIGATION window_state={window_state} />
			<AMAZON_LOGO />
			<CART_LOGO />
		</CONTAINER>
	)
}

export default TOP_BAR
