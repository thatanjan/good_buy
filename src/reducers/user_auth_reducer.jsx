import google_sign_in from 'firebase/firebase'

// import { third_party_sign_in as other_party_sign_in } from 'utils/firebase_utils/3rd_party_sign_in'
import {
	third_party_sign_in as other_party_sign_in,
	get_user,
} from 'utils/firebase_utils/firebase_setup'

export const state = {
	user: null,
}

export const new_user = 'SIGN_UP_USER'
export const old_user = 'SIGN_IN_USER'
export const log_out = 'LOG_OUT_USER'

export const third_party_sign_in = 'third_party_sign_in'

export const google_sign = 'GOOGLE_SIGN_IN'

// const sign_in = () => {

// }

export const user_auth_reducer = (
	state,
	{ type, provider_name }
) => {
	switch (type) {
		case third_party_sign_in:
			return other_party_sign_in(provider_name)
			break

		case 'GET':
			get_user((user) => {
				if (user) {
					console.log(user)
				} else {
					console.log('no user')
				}
			})

		default:
			return state
	}
}
