import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import {
	WRAPPER,
	CONTAINER as container,
} from 'components/wrappers/aspect_ratio_wrapper'

const PRODUCT_SUMMARY = styled.section`
	// background: teal;
	padding: 2rem 0;

	@media (min-width: 768px) {
		padding: 2rem;
	}
`
const STORE_TITLE = styled.h1`
	font-size: ${({ theme }) =>
		theme.small_screen.font_size.normal_font_size};
`

const PRODUCT_TITLE = styled.h1`
	font-size: ${({ theme }) =>
		theme.small_screen.font_size.secondary_font_size};
	margin: 1rem 0;
`

const REVIEWS_STARS = styled.section`
	min-height: 9rem;
	height: 15%;
	display: grid;
	grid-template: repeat(2, 1fr) / repeat(2, 1fr);
	align-items: center;
	font-size: 1rem;
	& > * {
		padding: 0 1rem;
	}
`

const CHOICE_PRODUCT = styled.button`
	height: 5rem;
	max-width: 20rem;
	width: 50%;
	background: red;
	display: grid;
	place-items: center;
	background: ${({ theme }) =>
		theme.button.background.primary};
	color: ${({ theme }) => theme.font.color.primary};
`

const DESCRIPTION = styled.section`
	height: 15%;
	// border: 1px solid black;
	// background: blue;
	font-size: ${({ theme }) =>
		theme.small_screen.font_size.normal_font_size};
	display: grid;
	grid-template-columns: 50% 50%;
	place-items: center baseline;
	margin: 2rem 2rem;
`

const COMPARE_REPORT = styled.section`
	   & > a{
			 display: block;
			 margin-bottom 1rem;
	   }
`
const PRODUCT_DETAILS = () => {
	return (
		<PRODUCT_SUMMARY>
			<STORE_TITLE children="visit the nike store" />
			<PRODUCT_TITLE children="Nike Men's Revolution 5 Running Shoe" />
			<REVIEWS_STARS>
				<div className="reviews">
					12000 reviews
				</div>
				<div className="stars">4.5</div>
				<div className="answered">
					123 questions answered
				</div>
				<div className="comments">
					1435 comments
				</div>
			</REVIEWS_STARS>
			<CHOICE_PRODUCT children="hello world >>" />
			<DESCRIPTION>
				<div
					className="product__property"
					children="Brand:"
				/>{' '}
				<div
					className="product__value"
					children="LG Series LG Ultra PC"
				/>
				<div
					className="product__property"
					children="Display Size:"
				/>
				<div
					className="product__value"
					children="17 Inches"
				/>
				<div
					className="product__property"
					children="Operating System:"
				/>
				<div
					className="product__value"
					children="Windows 10 Home"
				/>
			</DESCRIPTION>
			<COMPARE_REPORT>
				<NavLink
					to=""
					className="compare__similar"
				>
					compare with similar items
				</NavLink>
				<NavLink to="" className="report">
					report incorrect product
					description
				</NavLink>
			</COMPARE_REPORT>
		</PRODUCT_SUMMARY>
	)
}

export default PRODUCT_DETAILS
