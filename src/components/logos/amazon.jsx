import React from 'react'

import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { ReactComponent as AMAZON_LOGO } from 'assets/svgs/amazon-2.svg'

const WRAPPER = styled(NavLink)`
	display: grid;
	height: 100%;
`

export const LOGO = styled(AMAZON_LOGO)`
	// background: orange;
	height: 50%;
	max-width: 10rem;
	place-self: center;
	// grid-column: 3/5;
`

const AMAZON = () => {
	return (
		<WRAPPER to="/">
			<LOGO />
		</WRAPPER>
	)
}

export default AMAZON
