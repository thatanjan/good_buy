import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Loadable from 'react-loadable'

import { ReactComponent as LOCATION_LOGO } from 'assets/svgs/location.svg'
import SEARCH_BAR from 'components/search_bar/search_bar'
import OPTIONS from 'components/options/options'

import { useUserAuthData } from 'hooks/user_auth'

import { show_sign_in_or_user_name } from 'utils/user_sign_utils'

// logos
import AMAZON_LOGO from 'components/logos/amazon'
import CART_LOGO from 'components/logos/cart'

const top__part_background = `#e27e08`

const CONTAINER = styled.div`
	min-height: 10vh;
	max-width: 100vw;
	display: grid;
	grid-template-columns:
		minmax(auto, 7rem) 1fr minmax(auto, 7rem)
		minmax(auto, 7rem);
	grid-template-rows: 10rem 6rem 5rem 5rem;

	& > div {
	}

	.search_bar__container {
		color: white;
		grid-column: 1/5;
		display: grid;
		place-items: center;
		background: ${top__part_background};
	}

	.options {
		grid-column: 1/5;
		background: yellow;
	}

	.user {
		color: white;
		place-self: center;
	}

	.top__part {
		background: #cf6300;
		border-radius: 0px 0px 20px 20px;
		grid-column: 1/5;
		display: grid;
		grid-template-columns:
			minmax(auto, 7rem) 1fr auto
			minmax(auto, 7rem);

		grid-column: 1/5;
		position: relative;
		background: #cf6300;
	}

	.top__part ::before {
		height: 100%;
		width: 100%;
		background: aqua;
		position: absolute;
		top: 0;
		left: 0;
		content: '';
		z-index: -1;
		background: ${top__part_background};
	}

	.delivery {
		background: rgba(104, 104, 104, 0.08);
		width: 100vw;
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;

		& .location {
			height: 10vh;
			max-height: 3rem;
		}
	}
`
const Loading = () => <div>loading</div>

const NAVIGATION = Loadable({
	loader: () =>
		import('components/navigation/navigation.jsx'),
	loading: Loading,
})

const TOP_BAR = ({ location }) => {
	const user = useUserAuthData()
	return (
		<CONTAINER>
			<div className="top__part">
				<NAVIGATION />
				<AMAZON_LOGO />
				<NavLink to="/account" className="user">
					{`hello ${show_sign_in_or_user_name(user)}`}
				</NavLink>
				<CART_LOGO />
			</div>

			<div className="search_bar__container">
				<SEARCH_BAR />
			</div>

			<OPTIONS />

			<div className="delivery">
				<LOCATION_LOGO className="location" />

				<span> delivery at bangladesh</span>
			</div>
		</CONTAINER>
	)
}

export default TOP_BAR
