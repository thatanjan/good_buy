import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
	font: {
		size: {
			primary_header_font_size: '3rem',
			secondary_header_font_size: '2rem',
			normal_font_size: '1.5rem',
		},
		color: {
			primary: '#9f9f9f',
			link: '#7e7efd',
			hover: 'white',
		},

		padding: {
			bottom: '1rem',
		},
	},
	button: {
		background: {
			primary: '#b57501',
		},
	},

	small_screen: {
		font_size: {
			normal_font_size: '1rem',
			secondary_font_size: '2rem',
		},
	},
}

const THEME_CONTEXT = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			{children}
		</ThemeProvider>
	)
}

export default THEME_CONTEXT
