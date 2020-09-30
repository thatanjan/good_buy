import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const PRODUCT_DEATILS_SUMMARY = styled.div`
	& > div,
	a {
		padding: 0.5rem 0;
	}

	& > a {
		color: ${({ theme }) => theme.font.color.link};
		display: block;
	}

	@media (min-width: 1024px) {
		padding-left: 3rem;
		padding: 0 5%;
	}
`

const PRODUCT_TITLE = styled.h2`
	font-size: 2rem;
`

const PRODUCT__REVIEW__SUMMARY = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);

	& > * {
		padding: 1rem 0;
		// display: none;
	}
`

const CHOICE = styled.button`
	background: ${({ theme }) =>
		theme.button.background.primary};
	width: 40%;
	display: grid;
	place-items: center;
	padding: 1rem;
	color: ${({ theme }) => theme.font.color.primary};
`

const DESCRIPTION = styled.div`
	margin: 1rem 0;
	font-size: 1.3rem;
`

const PRODUCT_DETAILS = () => {
	return (
		<PRODUCT_DEATILS_SUMMARY>
			<h3 className="product__store">
				visit the nike store
			</h3>
			<PRODUCT_TITLE children="Nike Men's Revolution 5 Running Shoe" />
			<PRODUCT__REVIEW__SUMMARY>
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
			</PRODUCT__REVIEW__SUMMARY>

			<CHOICE children="choice" />
			<DESCRIPTION>
				Brand: LG Series LG Ultra PC <br />
				Display Size: 17 Inches Operating
				<br />
				System: Windows 10 Home Processor
				<br />
				Count 4
			</DESCRIPTION>
			<NavLink to="" className="compare__similar">
				compare with similar items
			</NavLink>
			<NavLink to="" className="report">
				report incorrect product description
			</NavLink>
		</PRODUCT_DEATILS_SUMMARY>
	)
}

export default PRODUCT_DETAILS
