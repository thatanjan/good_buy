import React, { createRef, useState } from 'react'
import styled from 'styled-components'
import { generate as short_id } from 'shortid'

const FORM_CONTAINER = styled.div`
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
	padding-left: 2%;
	font-size: 2vh;
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
	font-size: 2vh;
	align-self: start;
	position: relative;
	top: 80%;
	margin-left: 4%;
	pointer-event: none;
`

const input_types = ['email', 'password']

const SIGN_FORM = () => {
	const [
		input_is_clicked,
		set_input_is_clicked,
	] = useState(false)

	const [email_value, set_email_value] = useState('')
	const [password_value, set_password_value] = useState(
		''
	)

	let toogle_lift_label = (e) => {
		const input = e.target
		const label = input.previousElementSibling
		// set_input_is_clicked(!input_is_clicked)
		// console.log(label)
	}

	return (
		<FORM_CONTAINER>
			{input_types.map((item) => (
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
					/>
				</INDIVIDUAL>
			))}
		</FORM_CONTAINER>
	)
}

export default SIGN_FORM
