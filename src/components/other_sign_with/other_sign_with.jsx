import React from 'react'

import styled from 'styled-components'

import GOOGLE from 'assets/svgs/google-icon.svg'
import FACEBOOK from 'assets/svgs/facebook-icon.svg'
import Instagram from 'assets/svgs/instagram-2016.svg'

const CONTAINER = styled.nav``
const INDIVIDUAL = styled.div``
const TEXT_BACKGROUND = styled.div``

const options = [<GOOGLE />, <FACEBOOK />, <Instagram />]

const OTHER_SIGN_WITH = () => {
	return (
		<CONTAINER>
			{options.map((item) => (
				<INDIVIDUAL>
					{item}
					<TEXT_BACKGROUND>
						<p></p>
					</TEXT_BACKGROUND>
				</INDIVIDUAL>
			))}
		</CONTAINER>
	)
}

export default OTHER_SIGN_WITH
