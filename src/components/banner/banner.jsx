import React from 'react'
import styled from 'styled-components'

import amazon_banner from 'assets/amazon_banner.jpg'

const BANNER_CONTAINER = styled.div`
	background: aqua;
	min-height: 10vh;
	max-width: 100vw;
`

const THE_BANNER = styled.img``

const BANNER = () => {
	return (
		<BANNER_CONTAINER>
			<THE_BANNER src={amazon_banner} />
		</BANNER_CONTAINER>
	)
}

export default BANNER
