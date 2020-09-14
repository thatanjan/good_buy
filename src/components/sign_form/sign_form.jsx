import React from 'react'
import styled from 'styled-components'
import { generate as short_id } from 'shortid'

const FORM_CONTAINER = styled.div`
	background: teal;
`

const FORM_INPUT = styled.input``

const INDIVIDUAL = styled.div`
	background: red;
`

const LABEL = styled.label``

const input_types = ['email', 'password']

const SIGN_FORM = () => {
	return (
		<FORM_CONTAINER>
			{input_types.map((item) => (
				<INDIVIDUAL key={short_id()}>
					<LABEL
						for={item}
						children={item}
						key={short_id()}
					/>
					<FORM_INPUT
						type={item}
						name={item}
						key={short_id()}
					/>
				</INDIVIDUAL>
			))}
		</FORM_CONTAINER>
	)
}

export default SIGN_FORM
