import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import shortid from 'shortid'

const FOOTER_ONE = styled.div`
	width: 100vw;
	background: rgb(32, 32, 32);
	background: linear-gradient(
		180deg,
		rgba(32, 32, 32, 1) 0%,
		rgba(18, 22, 61, 0.7245098723082983) 100%
	);
	display: grid;
	grid-template-columns: repeat(
		auto-fit,
		minmax(15rem, 1fr)
	);
	place-content: center;

	.link__wrapper {
		padding: 1.5rem 0;
		padding-left: 1rem;
		font-size: 1rem;
	}

	@media (min-width: 900px) {
		grid-template-columns: repeat(
			auto-fit,
			minmax(30rem, 30rem)
		);
	}
`

const FOOTER_TWO = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	justify-items: center;
	color: white;
	background: rgba(18, 22, 61, 0.7245098723082983);
	background: linear-gradient(
		180deg,
		rgba(18, 22, 61, 0.7245098723082983) 0%,
		rgba(32, 32, 32, 1) 100%
	);

	.country {
		justify-self: normal;
		display: grid;
		grid-template-columns: repeat(
			auto-fit,
			minmax(10rem, auto)
		);
		justify-items: center;
		padding: 3rem 0;
	}

	.switch_account,
	sign_out {
		padding: 1rem 0;
	}

	.legals {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		padding: 2rem 0;

		.other {
			place-self: center;
			padding: 4rem 0;
			grid-column: 1/4;
		}
	}
`

const footer_one_data = [
	'Amazon.com',
	'your orders',
	'your Lists',
	'gift cards & Registry',
	'find a gift',
	'your account',
	'your subscribe and save',
	'browsing history',
	'sell products on Amazon',
	'your recomendations',
	'returns',
	'1-click settings',
	'customer service',
	'help',
]

const FOOTER = () => {
	return (
		<>
			<FOOTER_ONE>
				{footer_one_data.map((item) => (
					<div class="link__wrapper">
						<NavLink
							to=""
							children={item}
							key={shortid.generate()}
						/>
					</div>
				))}
			</FOOTER_ONE>
			<FOOTER_TWO>
				<div className="country">
					<div className="language">
						English
					</div>
					<div className="currency">
						Bangladeshi Taka
					</div>
					<div>
						Bangladesh
						<span
							role="img"
							aria-label="xx"
						>
							&#127463;
						</span>
						<span
							role="img"
							aria-label="xx"
						>
							&#127465;
						</span>
					</div>
				</div>
				<div className="switch_account">
					switch_account
				</div>
				<div className="sign_out">sign out</div>

				<div className="legals">
					<div className="condition">
						condition
					</div>
					<div className="privacy">
						privacy notice
					</div>
					<div className="ads">
						internet based ads
					</div>
					<div className="other">
						1996-2020, Amazon.com, Inc. or
						its afflicates
					</div>
				</div>
			</FOOTER_TWO>
		</>
	)
}

export default FOOTER
