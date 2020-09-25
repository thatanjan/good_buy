import React from 'react'
import styled from 'styled-components'

const QUIT = styled.span`
	color: white;
	position: absolute;
	top: 15%;
	right: 10%;
	font-size: 4vh;
	cursor: pointer;
	font-weight: 300;
	font-family: Arial, sans-serif;
`

const QUIT_BUTTON = ({ toggle }) => {
	return <QUIT children="X" onClick={toggle} />
}

export default QUIT_BUTTON
