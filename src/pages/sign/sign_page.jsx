import React, { useState } from 'react'
import styled from 'styled-components'

import { useLoginState } from 'hooks/user_auth'

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
	const [have_account, set_have_account] = useState(true)

	const sign_text = `sign ${have_account ? 'in' : 'up'}`

	const change_form_status = () => {
		set_have_account(!have_account)
	}

	return (
		<PAGE_CONTAINER>
			<LOGO_CONTAINER>
				<LOGO src={amazon_logo} />
			</LOGO_CONTAINER>
			<PAGE_TITLE children={`${sign_text}`} />
			<SIGN_FORM />
			<SIGN_BUTTON status={sign_text} />
			<HAVE_ACCOUNT
				children={`${sign_text}`}
				change_form_status={change_form_status}
				have_account={have_account}
			/>
		</PAGE_CONTAINER>
	)
}

export default SIGN_PAGE
