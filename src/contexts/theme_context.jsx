import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
	font: {
		size: {
			primary_header_font_size: '3rem',
			secondary_header_font_size: '2.5rem',
			normal_font_size: '1rem',
		},
		color: {
			primary: '#d9d9d9',
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
}

const THEME_CONTEXT = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			{children}
		</ThemeProvider>
	)
}

export default THEME_CONTEXT
