import { useContext } from 'react'
import { USER_CONTEXT } from 'contexts/user_account'

export const useUserAuthData = () => {
	const state = useContext(USER_CONTEXT)[0]
	return state
}

export const useLoginState = () => {
	const state = useContext(USER_CONTEXT)[1]
	return state
}
