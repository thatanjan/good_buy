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

const SIGN_FORM = ({
	values: { email_value, password_value },
	dispatches: { set_email_value, set_password_value },
}) => {
	const [
		input_is_clicked,
		set_input_is_clicked,
	] = useState(false)

	let toogle_lift_label = (e) => {
		const input = e.target
		const label = input.previousElementSibling
		// label.style.bottom = '0%'
		// set_input_is_clicked(!input_is_clicked)
		// set_input_is_clicked(true)
	}

	const input_change = ({ target: { type, value } }) => {
		if (type === 'email') {
			// setTimeout(() => {
			// 	set_email_value(value)
			// })
		} else {
			// setTimeout(() => {
			// 	set_password_value(value)
			// })
		}

		console.log(email_value, password_value)
	}

	return (
		<FORM_CONTAINER>
			{input_types.map((item) => (
				<INDIVIDUAL key={short_id()}>
					<LABEL
						htmlFor={item}
						children={item}
						key={short_id()}
						clicked={input_is_clicked}
					/>
					<FORM_INPUT
						type={item}
						name={item}
						key={short_id()}
						onClick={toogle_lift_label}
						value={
							item === 'email'
								? email_value
								: password_value
						}
						onChange={input_change}
					/>
				</INDIVIDUAL>
			))}
		</FORM_CONTAINER>
	)
}

export default SIGN_FORM
