import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const variants = {
	whileHover: {
		y: 4,
	},
}

export const LINK = styled(motion.div).attrs(() => ({
	variants: variants,
	whileHover: 'whileHover',
}))`
	color: #3668ff;
	align-self: start;
	font-size: 2.5vh;
	margin-top: 1rem;
	cursor: pointer;
`

const HAVE_ACCOUNT = styled.p`
	align-self: end;
	font-size: 2vh;
	text-align: center;
`

const WRAPPER = styled.div`
	display: grid;
	justify-items: center;
`

const CONTAINER = ({
	have_account,
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
