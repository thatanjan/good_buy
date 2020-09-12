import React, { useState } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Loadable from 'react-loadable'

import TOP_BAR from 'components/top_bar/top_bar'

// image
// import FRONT_IMAGE from 'components/front_image/front_image'

// import PAGES from 'pages/root/page'

export const Loading = () => <div>loading</div>

// lazy Loading components

const HOME = Loadable({
	loader: () => import('pages/home/home'),
	loading: Loading,
})

export let global_break = 1600

const App = () => {
	return (
		<>
			<TOP_BAR></TOP_BAR>
			<Switch>
				{/* <Route */}
				{/* 	exact */}
				{/* 	path="/:id" */}
				{/* 	component={PAGES} */}
				{/* /> */}
				location.pathname === '/' ? (
				<HOME />) : null}
			</Switch>

			{/* <BACKGROUND /> */}
			{/* <FRONT_IMAGE window_state={window_state} /> */}
		</>
	)
}

export default withRouter(App)
