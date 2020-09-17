import React from 'react'
import styled from 'styled-components'

// components
import HAVE_ACCOUNT from 'components/links/sign_links'
import SIGN_FORM from 'components/sign_form/sign_form'
import SIGN_BUTTON from 'components/buttons/sign_button'

// the logo
import amazon_logo from 'assets/svgs/amazon-2.svg'

let grid_center = `
display: grid;
place-items: center;
`

const LOGO_CONTAINER = styled.div`
	display: grid;
	place-items: center;
	min-height: 15rem;

	// background: red;
`

const LOGO = styled.img`
	height: 30%;
	// background: wheat;
	max-width: 100%;
`

const PAGE_CONTAINER = styled.div`
	// margin-top: 5rem;
	display: grid;
	grid-template-rows: 20% 10% 1fr 20% 20%;
	// background: aqua;
	color: white;
	max-height: 100vh;
	height: 100vh;
	overflow: hidden;
	max-width: 80rem;
	margin: 0 auto;
`

const PAGE_TITLE = styled.div`
	// min-height: 15rem;
	${grid_center}
	color: white;
	font-size: 5vh;
`

const SIGN_PAGE = ({ location, match }) => {
	return (
		<PAGE_CONTAINER>
			<LOGO_CONTAINER>
				<LOGO src={amazon_logo} />
			</LOGO_CONTAINER>
			<PAGE_TITLE children={'sign in'} />
			<SIGN_FORM />
			<SIGN_BUTTON />
			<HAVE_ACCOUNT children={'sign in'} />
		</PAGE_CONTAINER>
	)
}

export default SIGN_PAGE
