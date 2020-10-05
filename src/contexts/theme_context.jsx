import React from 'react'
import { ThemeProvider } from 'styled-components'

const lead = 1
const increment = 0.5

class Screen_size {
	constructor(lead) {
		this.xsm = `${lead - 0.5}rem`
		this.sm = `${lead}rem`
		this.md = `${lead + increment}rem`
		this.lg = `${lead + increment * 2}rem`
		this.xl = `${lead + increment * 3}rem`
	}
}

const small_screen = new Screen_size(lead)
const medium_screen = new Screen_size(lead + increment)
const large_screen = new Screen_size(lead + increment * 2)

const theme = { small_screen, medium_screen, large_screen }

// const theme = {
// 	size: {
// 		small_screen: {
// 			sm: '1rem',
// 			md: '1.5rem',
// 			lg: '2rem',
// 			xl: '2.5rem',
// 		},
// 		   medium_screen:{
// 			sm: '1.5rem',
// 			md: '2rem',
// 			lg: '2.5rem',
// 			xl: '3rem',
// 		   }
// 		   , large_screen: {
// 				 sm:
// 		   }
// 	},
// }

const SIZE_CONTEXT = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			{children}
		</ThemeProvider>
	)
}

export default SIZE_CONTEXT
