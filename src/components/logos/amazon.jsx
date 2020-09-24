import React from 'react'

import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import amazon_logo from 'assets/svgs/amazon-2.svg'

const WRAPPER = styled(NavLink)`
	display: grid;
`

export const LOGO = styled.img`
	// background: orange;
	height: 50%;
	max-width: 10rem;
	place-self: center;
	// grid-column: 3/5;
`

const AMAZON = () => {
	return (
		<WRAPPER to="/">
			<LOGO src={amazon_logo} />
		</WRAPPER>
	)
}

export default AMAZON
