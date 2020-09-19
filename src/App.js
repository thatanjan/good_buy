import React, { useEffect } from 'react'
import { Switch, withRouter, Route } from 'react-router-dom'
import Loadable from 'react-loadable'

import { useUserAuthData } from 'hooks/user_auth'

import { auth } from 'utils/firebase_utils/firebase_setup'

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

export let global_break = 1600

const App = ({ location }) => {
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
		</>
	)
}

export default withRouter(App)
