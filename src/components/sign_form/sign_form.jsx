import React, { createRef } from 'react'
import styled from 'styled-components'
import { generate as short_id } from 'shortid'

import SIGN_BUTTON from 'components/buttons/sign_button'

const FORM_CONTAINER = styled.form`
	display: grid;
	place-items: center;
	width: 100%;
`

const FORM_INPUT = styled.input`
	background: none;
	height: 70%;
	border: none;
	border-bottom: 1px solid gray;
	color: white;
	padding: 0% 2%;
	font-size: 2.5vh;
`

const INDIVIDUAL = styled.div`
	display: grid;
	place-items: center;
	height: 100%;
	width: 100%;

	& > * {
		width: 80%;
		max-width: 30rem;
	}
`

const LABEL = styled.label`
	font-size: 3vh;
	align-self: end;
	position: relative;
	margin-left: 4%;
	// bottom: -70%;
	pointer-event: none;
`

const input_types = ['email', 'password']

const email_ref = createRef()
const password_ref = createRef()

const refs = [email_ref, password_ref]

const SIGN_FORM = ({ status }) => {
	let toogle_lift_label = (e) => {
		// const input = e.target
		// const label = input.previousElementSibling
		// label.style.bottom = '0%'
		// set_input_is_clicked(!input_is_clicked)
		// set_input_is_clicked(true)
	}

	const input_change = () => {
		console.log(email_ref.current)
	}

	return (
		<FORM_CONTAINER>
			{input_types.map((item, index) => (
				<INDIVIDUAL key={short_id()}>
					<LABEL
						htmlFor={item}
						children={item}
						key={short_id()}
					/>
					<FORM_INPUT
						type={item}
						name={item}
						key={short_id()}
						onClick={toogle_lift_label}
						ref={refs[index]}
						onChange={input_change}
					/>
				</INDIVIDUAL>
			))}

			{/* the button */}
			<SIGN_BUTTON status={status} refs={refs} />
		</FORM_CONTAINER>
	)
}

export default SIGN_FORM
