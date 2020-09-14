import React from 'react'
import { Switch, withRouter, Route } from 'react-router-dom'
import Loadable from 'react-loadable'

import TOP_BAR from 'components/top_bar/top_bar'

// image
// import FRONT_IMAGE from 'components/front_image/front_image'

// import PAGES from 'pages/root/page'

export const Loading = () => <div>loading</div>

// lazy Loading components

const HOME = Loadable({
	loader: () => import('pages/home/home_page'),
	loading: Loading,
})

const SIGN = Loadable({
	loader: () => import('pages/sign/sign_page'),
	loading: Loading,
})

export let global_break = 1600

const App = ({ location }) => {
	console.log(location.pathname)
	return (
		<>
			{location.pathname !== '/sign' && (
				<TOP_BAR></TOP_BAR>
			)}
			<Switch>
				<Route
					path="/"
					exact
					component={HOME}
				/>

				<Route
					path="/sign"
					exact
					component={SIGN}
				/>
			</Switch>

			{/* <BACKGROUND /> */}
			{/* <FRONT_IMAGE window_state={window_state} /> */}
		</>
	)
}

export default withRouter(App)
