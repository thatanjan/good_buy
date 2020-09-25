import React from 'react'

import styled from 'styled-components'
import generate from 'shortid'

import { third_party_sign_in } from 'utils/firebase_utils/firebase_setup'
import { useLoginState } from 'hooks/user_auth'
import QUIT_BUTTON from 'components/quit_button/quit_button'

// logos
import GOOGLE from 'assets/svgs/google-icon.svg'
import FACEBOOK from 'assets/svgs/facebook-icon.svg'
import GITHUB from 'assets/svgs/github.svg'

const MODAL_CONTAINER = styled.div`
	position: absolute;
	top: 0;
	display: grid;
	place-items: center;
	height: 100vh;
	width: 100vw;
	background: #000000ab;
`

const CONTAINER = styled.nav`
	min-height: 30vh;
	width: 80vw;
	max-width: 50rem;
	display: grid;
	grid-template-rows: repeat(3, 1fr);
`
const INDIVIDUAL = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 20% 1fr;
	background: #1c1c1cc4;
	place-items: center;
`
const SIGN_WITH_BUTTON = styled.button`
	width: 80%;
	background: #2f2f2f;
	height: 45%;
	display: grid;
	place-items: center;
	border-radius: 5%;
	color: white;
	// cursor: pointer;
`

const LOGO = styled.img`
	height: 3rem;
	justify-self: end;
`

const auth_provider = `AuthProvider`

const options = [
	{
		src: GOOGLE,
		name: 'Google',
	},
	{
		src: FACEBOOK,
		name: 'Facebook',
	},
	{
		src: GITHUB,
		name: 'Github',
	},
]

options.forEach((item) => {
	Object.defineProperty(item, 'provider', {
		get: function () {
			return `${this.name}${auth_provider}`
		},
	})
})

const OTHER_SIGN_WITH = ({ toggle_show }) => {
	// is any user log in
	const set_is_logged_in = useLoginState()[1]

	// on click sign in with provider
	const sign_in = (provider_name) => {
		third_party_sign_in(provider_name).then(() =>
			set_is_logged_in(true)
		)
	}

	return (
		<MODAL_CONTAINER>
			<QUIT_BUTTON
				children="x"
				toggle={toggle_show}
			/>
			<CONTAINER>
				{options.map((item) => (
					<INDIVIDUAL key={generate()}>
						<LOGO src={item.src} />
						<SIGN_WITH_BUTTON
							type="button"
							onClick={() =>
								sign_in(
									item.provider
								)
							}
						>
							{`sign in with ${item.name}`}
						</SIGN_WITH_BUTTON>
					</INDIVIDUAL>
				))}
			</CONTAINER>
		</MODAL_CONTAINER>
	)
}

export default OTHER_SIGN_WITH
