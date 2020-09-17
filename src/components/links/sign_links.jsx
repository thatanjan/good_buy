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

const CONTAINER = (props) => {
	return (
		<WRAPPER>
			<HAVE_ACCOUNT
				children={"Don't have an account"}
			/>
			<LINK to="/log" children={'sign up'} />
		</WRAPPER>
	)
}

export default CONTAINER
