import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import NAVIGATION_ITEMS, {
	nav_items_quantity,
} from 'components/navigation_items/navigation_items'

const navigation_variants = {
	initial: { x: 100 },
	animate: {
		x: 0,
	},
	exit: {
		x: 100,
	},
}

const CONTAINER = styled(motion.nav)`
	background: #010188bf;
	z-index: 4;
	place-items: center;
	position: absolute;
	top: 0;
	width: 100vw;
	height: 100vh;
	display: grid;
	grid-template-rows: repeat(${nav_items_quantity}, 1fr);

	@media (min-width: 1601px) {
		grid-template-rows: 1fr;
		grid-template-columns: repeat(
			${nav_items_quantity},
			1fr
		);
		height: 5vh;
		top: 95%;
	}
`

const NAVIGATION_BAR = () => {
	return (
		<CONTAINER
			variants={navigation_variants}
			initial="initial"
			animate="animate"
			exit="exit"
		>
			<NAVIGATION_ITEMS />
		</CONTAINER>
	)
}

export default NAVIGATION_BAR

// export default memo(NAVIGATION_BAR)
