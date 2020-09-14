import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './reset.css'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router } from 'react-router-dom'

import CART_CONTEXT from 'contexts/cart_context.jsx'

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<CART_CONTEXT>
				<App />
			</CART_CONTEXT>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
