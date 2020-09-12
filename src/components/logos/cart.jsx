import React from 'react'
import styled from 'styled-components'

import { LOGO as AMAZON_LOGO_STYLE } from 'components/logos/amazon'

import cart_logo from 'assets/svgs/shopping-cart.svg'

const CART_LOGO = styled(AMAZON_LOGO_STYLE)`
	justify-self: end;
	margin-right: 4rem;
`

const CART = () => {
	return <CART_LOGO src={cart_logo} />
}

export default CART
