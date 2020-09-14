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

const ITEMS = styled(NavLink)`
	color: white;
`

const nav_items = [
	{ name: 'home', path: '/' },
	{ name: 'cart', path: '/help' },
	{ name: 'sign in', path: '/help' },
	{ name: 'help', path: '/help' },
]

export let nav_items_quantity = nav_items.length

const NAVIGATION_ITEMS = () => {
	return (
		<>
			{nav_items.map((item) => {
				return (
					<motion.span
						variants={variants}
						whileHover="hover"
						key={short_id.generate()}
					>
						<ITEMS
							to={item.path}
							children={item.name}
						/>
					</motion.span>
				)
			})}
		</>
	)
}

export default NAVIGATION_ITEMS
