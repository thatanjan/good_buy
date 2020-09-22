import React, { useState, useEffect } from 'react'
import Loadable from 'react-loadable'

import { AnimatePresence } from 'framer-motion'

// components
const Loading = () => <div>loading</div>

//  lazy loading components
//  the navigation bar
const NAVIGATION_BAR = Loadable({
	loader: () =>
		import(
			'components/navigation_bar/navigation_bar'
		),
	loading: Loading,
})

// the hamburger_menu
const HAMBURGER_MENU = Loadable({
	loader: () =>
		import(
			'components/hamburger_menu/hamburger_menu'
		),
	loading: Loading,
})

const NAVIGATION = ({ window_state }) => {
	// // should navigation bar shows
	// const [
	// 	should_show_navbar,
	// 	set_should_show_navbar,
	// ] = useState(false)

	// // is hamburger_menu clicked or not
	// const [
	// 	is_menu_clicked,
	// 	set_is_menu_clicked,
	// ] = useState(false)

	// // toggle the navigation
	// const toggle_navigation = (event) => {
	// 	set_is_menu_clicked(!is_menu_clicked)
	// }

	// useEffect(() => {
	// 	// this will check for if the window is 1600px wide. if it is and hamburger_menu is clicked then the navigation bar will show. if not then navigation will not show.

	// 	if (
	// 		window_state === false ||
	// 		is_menu_clicked === true
	// 	) {
	// 		set_should_show_navbar(true)
	// 		console.log(should_show_navbar)
	// 	} else {
	// 		set_should_show_navbar(false)
	// 	}
	// }, [window_state, should_show_navbar, is_menu_clicked])

	return (
		<>
			{/* {window_state === true ? ( */}
			<HAMBURGER_MENU />
			{/* ) : null} */}

			{/* <AnimatePresence> */}
			{/* 	{should_show_navbar && ( */}
			{/* 		<NAVIGATION_BAR /> */}
			{/* 	)} */}
			{/* </AnimatePresence> */}
		</>
	)
}

export default NAVIGATION
