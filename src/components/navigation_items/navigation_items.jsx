import React from 'react'
import styled from 'styled-components'
import short_id from 'shortid'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

import { show_sign_in_or_user_name } from 'utils/user_sign_utils'
import {
	useOnlyUser,
	useUserAuthData,
} from 'hooks/user_auth'

const variants = {
	initial: {
		fontSize: '2rem',
	},
	hover: {
		fontSize: '3rem',
		// color: '#fff',
		color: 'brown',
	},
}

const WRAPPER = styled.div`
	padding: 5rem;
`

const ITEMS = styled(NavLink)`
	color: white;
`

// const nav_items = [
// 	{ name: 'home', path: '/' },
// 	{ name: 'cart', path: '/cart' },
// 	{ name: 'sign in', path: '/sign' },
// 	{ name: 'help', path: '/help' },
// ]

const ACCOUNT = styled.div``

const NAVIGATION_PARTS = styled.ul`
	display: grid;
	grid-template-column: 1fr;
	// background: wheat;
	// height: 10rem;
	color: white;
	margin-bottom: 5%;

	& h1,
	li {
		// padding: 1rem 0;
	}

	h1 {
		color: white;
		font-size: 3rem;
	}

	.nav__options {
		font-size: 1.5rem;
		padding: 0.5rem 0;
	}
`

// export let nav_items_quantity = nav_items.length

const account_items = [
	'account ',
	'orders ',
	'Buy again',
	'lists',
	'your browsing history',
	'your recomendations',
	'customer service',
]

const explore_items = [
	'Explore',
	'home',
	'Health and household',
	'books',
	'pc',
	'see all departments >',
]

const settings_items = [
	'settings',
	'english',
	'united score',
	'sign out',
]

const navigation_parts = [
	account_items,
	explore_items,
	settings_items,
]

const NAVIGATION_ITEMS = () => {
	const user = useOnlyUser()
	return (
		<>
			<WRAPPER>
				<ACCOUNT>
					hello{' '}
					{show_sign_in_or_user_name(user)}
				</ACCOUNT>
				{navigation_parts.map((item) => (
					<NAVIGATION_PARTS>
						{item.map((parts, index) => (
							<>
								{index === 0 ? (
									<h1>
										<li>
											<NavLink
												to=""
												children={
													parts
												}
											/>
										</li>
										{/* <div></div>{' '} */}
									</h1>
								) : (
									<li className="nav__options">
										<NavLink
											to=""
											children={
												parts
											}
										/>
									</li>
								)}{' '}
							</>
						))}
					</NAVIGATION_PARTS>
				))}
			</WRAPPER>
		</>
	)
}

export default NAVIGATION_ITEMS
