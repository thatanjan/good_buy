import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './reset.css'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router } from 'react-router-dom'

import USER_CONTEXT from 'contexts/user_account'
import CART_CONTEXT from 'contexts/cart_context'

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<USER_CONTEXT>
				<CART_CONTEXT>
					<App />
				</CART_CONTEXT>
			</USER_CONTEXT>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
