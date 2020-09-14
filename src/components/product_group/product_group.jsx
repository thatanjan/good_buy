import styled from 'styled-components'

const ALL_PRODUCT_WRAPPER = styled.div`
	background: red;
	display: grid;
	grid-template-columns: repeat(
		auto-fit,
		minmax(20rem, 40rem)
	);
	grid-column-gap: 1rem;
	place-items: center;
	place-content: center;
	width: 100vw;
`

export default ALL_PRODUCT_WRAPPER
