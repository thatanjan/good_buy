import React from 'react'
import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

export const LINK = styled(NavLink).attrs((props) => ({
	children: props.children,
}))`
	color: #472fd7;
`

const HAVE_ACCOUNT = styled.p``

const WRAPPER = styled.div``

const CONTAINER = (props) => {
	return (
		<WRAPPER>
			<HAVE_ACCOUNT />
			<LINK to="" children={props.have_account} />
		</WRAPPER>
	)
}

export default CONTAINER
