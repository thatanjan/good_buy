import React from 'react'
import styled from 'styled-components'
import short_id from 'shortid'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

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

const account_items = [
	' home ',
	'account ',
	'orders ',
	'Buy again',
	'lists',
	'your browsing history',
	'your recomendations',
	'customer service',
]

const ACCOUNT = styled.div`
	.greetings {
		// & > hr {
		// 	width: 100vw;
		// }
	}
`

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
	return (
		<>
			<WRAPPER>
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
			{/* <ACCOUNT> */}
			{/* 	<h1 className="greetings"> */}
			{/* 		hello anjan */}
			{/* 		<hr /> */}
			{/* 	</h1> */}
			{/* 	<ul class='account__item__'> */}
			{/* 		{account_items.map((item) => ( */}
			{/* 			   <li key=''><a href=""> */}
			{/* 					 {item} */}
			{/* 			   </a></li> */}
			{/* 		))} */}
			{/* 	</ul> */}
			{/* </ACCOUNT> */}
		</>
	)
}

export default NAVIGATION_ITEMS
