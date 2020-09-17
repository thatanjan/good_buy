import google_sign_in from 'firebase/firebase'

// import { third_party_sign_in as other_party_sign_in } from 'utils/firebase_utils/3rd_party_sign_in'
import { third_party_sign_in as other_party_sign_in } from 'utils/firebase_utils/firebase_setup'

export const state = {
	user: null,
}

export const new_user = 'SIGN_UP_USER'
export const old_user = 'SIGN_IN_USER'
export const log_out = 'LOG_OUT_USER'

export const third_party_sign_in = 'third_party_sign_in'

export const google_sign = 'GOOGLE_SIGN_IN'

export const user_auth_reducer = async (
	state,
	{ type, provider_name }
) => {
	switch (type) {
		case third_party_sign_in:
			let modified_promise = await other_party_sign_in(
				provider_name
			)

			let modified_state = await modified_promise
			// let modified_state = await

			console.log(modified_state)

			return modified_state
			// .then((user) => (state.user = user))
			// .then((res) => console.log(res))
			// // .then((user) => ({
			// // 	// user: user,
			// // }))
			// .catch((error) => console.log(error))

			break
		default:
			return state
	}
}
