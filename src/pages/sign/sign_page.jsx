import React from 'react'
import styled from 'styled-components'

// components
import HAVE_ACCOUNT from 'components/links/sign_links'
import SIGN_FORM from 'components/sign_form/sign_form'

const PAGE_CONTAINER = styled.div`
	display: grid;
	grid-template-rows: repeat(5, 20%);
	max-width: 100vw;
	background: aqua;
	color: white;
`

const PAGE_TITLE = styled.h1``

const SIGN_PAGE = ({ location, match }) => {
	console.log(match)
	return (
		<PAGE_CONTAINER>
			<PAGE_TITLE children={'sign in'} />
			<SIGN_FORM />
			<HAVE_ACCOUNT children={'sign in'} />
		</PAGE_CONTAINER>
	)
}

export default SIGN_PAGE
