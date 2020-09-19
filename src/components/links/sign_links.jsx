import React from 'react'
import styled from 'styled-components'

export const LINK = styled.div`
	color: #3668ff;
	align-self: start;
	font-size: 2vh;
	margin-top: 1rem;
	cursor: pointer;
`

const HAVE_ACCOUNT = styled.p`
	align-self: end;
	font-size: 3vh;
	text-align: center;
`

const WRAPPER = styled.div`
	display: grid;
	justify-items: center;
`

const CONTAINER = ({
	have_account,
	children,
	change_form_status,
}) => {
	return (
		<WRAPPER>
			<HAVE_ACCOUNT
				children={
					have_account
						? "Don't have an account"
						: 'already have an account?'
				}
			/>
			<LINK
				to="/log"
				children={
					have_account
						? `sign up`
						: `sign in`
				}
				onClick={change_form_status}
			/>
		</WRAPPER>
	)
}

export default CONTAINER
