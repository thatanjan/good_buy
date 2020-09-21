import React, { useState } from 'react'
import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

// components
import HAVE_ACCOUNT from 'components/links/sign_links'
import SIGN_FORM from 'components/sign_form/sign_form'

// the logo
import { ReactComponent as AMAZON_LOGO } from 'assets/svgs/amazon-2.svg'

let grid_center = `
	   display: grid;
	   place-items: center;
`

const LOGO_WRAPPER = styled.div`
	display: grid;
	align-items: center;
`

const LOGO_LINK = styled(NavLink)`
	height: 6vh;
	& > svg {
		height: 100%;
		max-width: 100%;
		fill: white;
	}
`

const PAGE_CONTAINER = styled.div`
	// margin-top: 5rem;
	display: grid;
	grid-template-rows: 20% 10% 1fr 20%;
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
	font-size: 4vh;
`

const SIGN_PAGE = () => {
	const [have_account, set_have_account] = useState(true)

	const sign_text = `sign ${have_account ? 'in' : 'up'}`

	const change_form_status = () => {
		set_have_account(!have_account)
	}

	return (
		<PAGE_CONTAINER>
			<LOGO_WRAPPER>
				<LOGO_LINK to="/">
					<AMAZON_LOGO />
				</LOGO_LINK>
			</LOGO_WRAPPER>
			<PAGE_TITLE children={`${sign_text}`} />
			<SIGN_FORM status={sign_text} />
			{/* <SIGN_BUTTON /> */}
			<HAVE_ACCOUNT
				children={`${sign_text}`}
				change_form_status={change_form_status}
				have_account={have_account}
			/>
		</PAGE_CONTAINER>
	)
}

export default SIGN_PAGE
