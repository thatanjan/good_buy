import React from 'react'
import styled from 'styled-components'

import profile_image from 'assets/taylor-swift.jpg'

const PROFILE_CONTAINER = styled.div`
	padding: 2rem 0;
	// height: 20vh;
	width: 100vw;
	// min-width: 20rem;
	// background: blue;
	display: grid;
`

const IMAGE_CONTAINER = styled.div`
	position: relative;
	width: 70%;
	padding-top: 56.25%;
	justify-self: center;
`
const IMAGE = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 2rem;
`

const PROFILE_NAME = styled.h1`
	display: grid;
	place-items: center;
	font: 5rem;
	padding: ${({ theme }) => theme.small_screen.md};
`

const PROFILE_IMAGE = () => {
	return (
		<>
			<PROFILE_CONTAINER>
				<IMAGE_CONTAINER>
					<IMAGE src={profile_image} />
				</IMAGE_CONTAINER>
				<PROFILE_NAME children={'taylor swift'} />
			</PROFILE_CONTAINER>
		</>
	)
}

export default PROFILE_IMAGE
