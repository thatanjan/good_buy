import React from 'react'

import styled from 'styled-components'

import amazon_logo from 'assets/svgs/amazon-2.svg'
export const LOGO = styled.img`
	// background: orange;
	height: 50%;
	max-width: 10rem;
	place-self: center;
`

const AMAZON = () => {
	return <LOGO src={amazon_logo} />
}

export default AMAZON
