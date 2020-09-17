import firebase from 'firebase/app'
import 'firebase/auth'
export const third_party_sign_in = (provider_name) => {
	// console.log(firebase.auth[provider_name])
	// console.log(provider_name)
	const provider = new firebase.auth[provider_name]()
	console.log(provider)
	return firebase.auth().signInWithPopup(provider)
}

// export const google_sign_in = () => {
// 	// return new Promise((res, rej) => {
// 	// 	res(firebase.auth().signInWithPopup(provider))
// 	// })
// 	return firebase
// 		.auth()
// 		.signInWithPopup(google_auth_provider)
// }
