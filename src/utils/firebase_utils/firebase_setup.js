import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyAv8ghu1L4I-3WQt7XHsyjl52a4vaMHSPQ',
	authDomain: 'buy-from.firebaseapp.com',
	databaseURL: 'https://buy-from.firebaseio.com',
	projectId: 'buy-from',
	storageBucket: 'buy-from.appspot.com',
	messagingSenderId: '863007315345',
	appId: '1:863007315345:web:46ac29b8f2392a10eab630',
}

firebase.initializeApp(firebaseConfig)

export const third_party_sign_in = (provider_name) => {
	// console.log(firebase.auth[provider_name])
	// console.log(provider_name)
	const provider = new firebase.auth[provider_name]()
	console.log(provider)
	return firebase.auth().signInWithPopup(provider)
}

// export const google_auth_provider = new firebase.auth.GoogleAuthProvider()
