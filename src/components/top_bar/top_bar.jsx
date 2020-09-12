import React, { useState } from 'react'
import styled from 'styled-components'

import Logo from 'assets/svgs/amazon-2.svg'
import { global_break } from '../../App.js'
import Loadable from 'react-loadable'

const CONTAINER = styled.div`
	min-height: 10vh;
	max-width: 100vw;
	background: aqua;
	display: grid;
	grid-template-columns: 1fr 30%;
`
const Loading = () => <div>loading</div>

const LOGO = styled.img`
	// background: orange;
	height: 50%;
	max-width: 10rem;
	margin-left: 4rem;
	align-self: center;
`
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
			<LOGO src={Logo}></LOGO>
			<NAVIGATION window_state={window_state} />
		</CONTAINER>
	)
}

export default TOP_BAR
