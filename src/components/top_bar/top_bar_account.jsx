import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { useUserAuthData } from 'hooks/user_auth'

import AMAZON_LOGO from 'components/logos/amazon'
import { ReactComponent as back_button } from 'assets/svgs/left_arrow.svg'

import NAVIGATION from 'components/navigation/navigation'

const TOP_CONTAINER = styled.div`
	// height: 10rem;
	width: 100%;
	background: teal;
	display: grid;
	grid-template-columns: minmax(8rem, 1fr) 4fr minmax(
			8rem,
			1fr
		);
	grid-template-rows: 10rem;

	.back__arrow__button {
		align-self: start;
		// background: violet;
		height: 100%;
		width: 100%;
		display: grid;
		place-items: center;

		a {
			display: grid;
			justify-items: center;
		}
	}
`

const LOGO = styled(AMAZON_LOGO)``

const BACK_BUTTON = styled(back_button)`
	fill: white;
	width: 50%;
	height: 100%;
`

const TOP_BAR_ACCOUNT = () => {
	return (
		<>
			<TOP_CONTAINER>
				<div className="back__arrow__button">
					<NavLink to="/">
						<BACK_BUTTON />
					</NavLink>
				</div>
				<LOGO />
				<NAVIGATION items={''} />
			</TOP_CONTAINER>
		</>
	)
}

export default TOP_BAR_ACCOUNT
