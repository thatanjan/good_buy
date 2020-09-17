import React, { useState } from 'react'
import styled from 'styled-components'

import { LINK } from 'components/links/sign_links'

import { motion } from 'framer-motion'

import OTHER_SIGN_WITH from 'components/other_sign_with/other_sign_with'

const button_variant = {
	base: {
		background: '#bf7e06',
	},
	whileHover: {
		background: 'orange',
		scale: 1.2,
		boxShadow: 'rgba(0, 0, 0, 0.5) 10px 10px 8px',
		textShadow: 'rgba(0, 0, 0, 0.5) 5px 5px 4px',
	},
}

const CONTAINER = styled.div`
	display: grid;
	place-items: center;
`

const BUTTON = styled(motion.button)`
	width: 80%;
	max-width: 30rem;
	padding: 1rem;
	font-size: 2rem;
	cursor: pointer;
	color: white;
`

const SIGN_WITH_LINK = styled(LINK)``

const SIGN_BUTTON = () => {
	const [
		show_other_sign_options,
		set_show_other_sign_options,
	] = useState(false)

	const show_other_sign = () => {
		set_show_other_sign_options(
			!show_other_sign_options
		)
	}

	return (
		<CONTAINER>
			<BUTTON
				variants={button_variant}
				initial="base"
				whileHover="whileHover"
				animate="animate"
				children="sign in"
				type="submit"
			/>
			<SIGN_WITH_LINK
				children="or sign in with"
				onClick={show_other_sign}
			/>

			{show_other_sign_options && (
				<OTHER_SIGN_WITH
					toggle_show={show_other_sign}
				/>
			)}
		</CONTAINER>
	)
}

export default SIGN_BUTTON
