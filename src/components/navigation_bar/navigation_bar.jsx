import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import QUIT_BUTTON from 'components/quit_button/quit_button'
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
	background: rgb(73, 36, 0);
	background: linear-gradient(
		180deg,
		rgba(73, 36, 0, 1) 0%,
		rgba(255, 134, 0, 0.7357143541010154) 100%
	);
	z-index: 4;
	place-items: center;
	position: fixed;
	top: 0;
	width: 100vw;
	height: 100vh;
	overflow-y: scroll;

	// display: grid;
	// grid-template-rows: repeat(${nav_items_quantity}, 1fr);

	// @media (min-width: 1601px) {
	// 	grid-template-rows: 1fr;
	// 	grid-template-columns: repeat(
	// 		${nav_items_quantity},
	// 		1fr
	// 	);
	// 	height: 5vh;
	// 	top: 95%;
	// }
`

const NAVIGATION_BAR = ({ toggle, navigation_items }) => {
	// console.log(navigation_items)

	return (
		<CONTAINER
			variants={navigation_variants}
			initial="initial"
			animate="animate"
			exit="exit"
		>
			<QUIT_BUTTON toggle={toggle} />
			{/* {navigation_items()} */}
			{/* <NAVIGATION_ITEMS /> */}
		</CONTAINER>
	)
}

export default NAVIGATION_BAR

// export default memo(NAVIGATION_BAR)
