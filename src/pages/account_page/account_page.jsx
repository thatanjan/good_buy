import React from 'react'
import styled from 'styled-components'

import TOP_BAR_ACCOUNT from 'components/top_bar/top_bar_account'
import ACCOUNT_DETAILS from 'components/account_details/account_details'

import PROFILE_IMAGE from 'components/profile_image/profile_image'

const CONTAINER = styled.div``

const ACCOUNT_PAGE = () => {
	return (
		<CONTAINER>
			<TOP_BAR_ACCOUNT />
			<PROFILE_IMAGE />
			<ACCOUNT_DETAILS />
		</CONTAINER>
	)
}

export default ACCOUNT_PAGE
