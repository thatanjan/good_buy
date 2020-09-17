import { useContext } from 'react'
import { USER_CONTEXT } from 'contexts/user_account'

export const useUserAuthData = () => {
	const state = useContext(USER_CONTEXT)
	return state
}
