export const show_first_name = ({ displayName }) => {
	return displayName.split(' ')[0]
}

export const show_sign_in_or_user_name = (user) => {
	console.log(user)
	if (user !== null) {
		return show_first_name(user)
	} else {
		return 'sign in'
	}
}
