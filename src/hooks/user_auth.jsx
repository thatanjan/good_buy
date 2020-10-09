import { useState, useContext } from 'react'
import { USER_CONTEXT } from 'contexts/user_account'

export const useUserAuthData = () => {
	const state = useContext(USER_CONTEXT)[0]
	return state
}

export const useSetUserData = () => {
	const user = useContext(USER_CONTEXT)[1]
	console.log(user)
	return user
}

export const useLoginState = () => {
	const user = useContext(USER_CONTEXT)[1]
	const [is_logged_in, set_is_logged_in] = useState(
		user === null ? false : true
	)

	return is_logged_in
}
