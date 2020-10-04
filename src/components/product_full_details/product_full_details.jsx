import React from 'react'
import styled from 'styled-components'

const FULL_DETAILS = styled.div`
	@media (min-width: 768px) {
		grid-column: 1/4;
	}
`

const DETAILS_HEADER = styled.div`
	font-size: 2rem;
`

const THE_DETAILS = styled.ol`
	& > li {
		margin-left: 3rem;
		padding: 1rem 1rem 0 1rem;
		font-size: 1.4rem;
		line-height: 2.5rem;
		// color: ${({ theme }) =>
			theme.font.color.primary};

		& ::marker {
			font-weight: bold;
			font-size: 1.7rem;
		}
	}
`
const PRODUCT_FULL_DETAILS = () => {
	return (
		<FULL_DETAILS>
			<DETAILS_HEADER children="details" />
			<THE_DETAILS>
				<li>
					Ipsum sequi illo officia tenetur
					doloremque. Deserunt et perferendis
					ipsa consectetur nesciunt! Ipsa
					totam ratione rem optio vero At
					earum sit perferendis sint amet
					culpa? Est voluptatum nihil
					corporis maxime libero elit
					voluptate Dolores
				</li>
				<li>
					Consectetur eligendi atque harum
					alias atque ea obcaecati Amet rem
					unde accusamus iste eaque, dolorum
					sapiente Perferendis error
					perspiciatis necessitatibus vel
					lorem Architecto voluptatibus
					delectus libero ex aut Dignissimos
					repellat necessitatibus aperiam
					tempora voluptatem quidem Libero
					repudiandae maiores minus
					exercitationem incidunt! Natus
					obcaecati fugit totam nam ipsum.
					Minima asperiores?lorem1000
				</li>
			</THE_DETAILS>
		</FULL_DETAILS>
	)
}

export default PRODUCT_FULL_DETAILS
