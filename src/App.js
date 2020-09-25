import React from 'react'
import { Switch, withRouter, Route } from 'react-router-dom'
import Loadable from 'react-loadable'

import './app.css'
import TOP_BAR from 'components/top_bar/top_bar'

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

const PRODUCT_DETAIL = Loadable({
	loader: () =>
		import('pages/product_detail/product_detail'),
	loading: Loading,
})

export let global_break = 1600

const App = ({ location }) => {
	return (
		<>
			{/* show the top navigation bar only if not in /sign route */}
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

				<Route
					path="/product"
					exact
					component={PRODUCT_DETAIL}
				/>
			</Switch>
		</>
	)
}

export default withRouter(App)
