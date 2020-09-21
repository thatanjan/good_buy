import React, { useState } from 'react'
import styled from 'styled-components'
import Loadable from 'react-loadable'

import { variants, LINK } from 'components/links/sign_links'

import { motion } from 'framer-motion'

const Loading = () => <div>loading</div>

const OTHER_SIGN_WITH = Loadable({
	loader: () =>
		import(
			'components/other_sign_with/other_sign_with'
		),
	loading: Loading,
})

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
	width: 100%;
`

const BUTTON = styled(motion.button)`
	width: 80%;
	max-width: 30rem;
	padding: 1vh;
	font-size: 3vh;
	cursor: pointer;
	color: white;
`

const SIGN_WITH_LINK = styled(LINK)``

const SIGN_BUTTON = ({ status, refs }) => {
	const [
		show_other_sign_options,
		set_show_other_sign_options,
	] = useState(false)

	const show_other_sign = () => {
		set_show_other_sign_options(
			!show_other_sign_options
		)
	}

	const submit_handeler = (event) => {
		console.log(event)
		refs.forEach((item) => {
			item.current.value = ''
		})
		event.preventDefault()
	}

	return (
		<CONTAINER>
			<BUTTON
				variants={button_variant}
				initial="base"
				whileHover="whileHover"
				animate="animate"
				children={status}
				type="submit"
				onClick={submit_handeler}
			/>
			<SIGN_WITH_LINK
				children={`or ${status} with`}
				onClick={show_other_sign}
				variants={variants}
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
