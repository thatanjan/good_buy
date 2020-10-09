import React, { useState } from 'react'
import Loadable from 'react-loadable'
import { AnimatePresence } from 'framer-motion'

// import home_page_ref from 'pages/home/home_page'

// components
const Loading = () => <div>loading</div>

//  lazy loading components
// the navigation bar
const NAVIGATION_BAR = Loadable({
	loader: () =>
		import('components/navigation_bar/navigation_bar'),
	loading: Loading,
})

// the hamburger_menu
const HAMBURGER_MENU = Loadable({
	loader: () =>
		import('components/hamburger_menu/hamburger_menu'),
	loading: Loading,
})

const NAVIGATION = ({ window_state, items }) => {
	// const home_page_element = useRef(home_page_ref).current
	const disable_scroll = (condition) => {
		const class_name = 'disable__scroll'
		const home_page_element = document.querySelector(
			'.home_page'
		)

		if (!condition) {
			document.body.style.overflowY = 'hidden'
		} else {
			document.body.style.overflowY = 'auto'
		}
		// home_page_element.style.overflow = !condition
		// 	? 'hidden'
		// 	: 'initial'
	}

	// should navigation bar shows
	const [
		toggle_navigation,
		set_toggle_navigation,
	] = useState(false)

	// toggle the navigation
	const toggle_nav = (event) => {
		set_toggle_navigation(!toggle_navigation)
		disable_scroll(toggle_navigation)
		// console.log(home_page_element)
		// set_is_menu_clicked(!is_menu_clicked)
	}

	return (
		<>
			{!toggle_navigation && (
				<HAMBURGER_MENU click={toggle_nav} />
			)}
			<AnimatePresence>
				{toggle_navigation && (
					<NAVIGATION_BAR
						navigation_items={items}
						toggle={toggle_nav}
					/>
				)}
			</AnimatePresence>
		</>
	)
}

export default NAVIGATION
