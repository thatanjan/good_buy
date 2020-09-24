import React from 'react'
import styled from 'styled-components'

const RATIO__CONTAINER_STYLE = styled.div`
	margin-top: 1rem;
	background: linear-gradient(
		180deg,
		rgba(32, 32, 32, 1) 0%,
		rgba(13, 13, 13, 0.3870430238785282) 100%
	);
	position: relative;
	width: 100vw;
	padding-top: 100%;

	@media (min-width: 768px) {
		padding-top: 35%;
	}

	@media (min-width: 1200px) {
		padding-top: 25%;
	}
`

const CONTAINER = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-rows: auto 4fr auto;

	// box-shadow
	-webkit-box-shadow: 14px 26px 66px -14px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 14px 26px 66px -14px rgba(0, 0, 0, 0.75);
	box-shadow: 14px 26px 66px -14px rgba(0, 0, 0, 0.75);

	h2,
	.see__more {
		color: white;
		align-self: center;
		padding: 1rem;
	}

	h2 {
		font-size: 1.8rem;
	}

	div > a {
		font-size: 1.5rem;
		color: inherit;
	}
`

const PRODUCT_CONTAINER = styled.div`
	height: 100%;
	overflow: hidden;
	margin: 0 5px;

	display: grid;
	grid-template-columns: repeat(2, 50%);
	grid-template-rows: repeat(2, 50%);

	@media (min-width: 768px) {
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: 1fr;
		grid-gap: 0px 5px;
	}
`

const PRODUCTS = styled.div`
	overflow: hidden;

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
`

const PRODUCT_COLLECTION = () => {
	return (
		<RATIO__CONTAINER_STYLE>
			<CONTAINER>
				<h2>see the exclusive details below</h2>
				<PRODUCT_CONTAINER>
					<PRODUCTS>
						<img
							src="https://kompark.ru/wp-content/uploads/2019/03/V1AAul9f3ao.jpg"
							alt=""
						/>
					</PRODUCTS>
					<PRODUCTS>
						<img
							src="https://43.img.avito.st/640x480/5863013643.jpg"
							alt=""
						/>
					</PRODUCTS>
					<PRODUCTS>
						<img
							src="https://mi0.rightinthebox.com/images/384x384/201807/erlohv1532341226984.jpg"
							alt=""
						/>
					</PRODUCTS>
					<PRODUCTS>
						<img
							src="https://mk0trickyphotos51tq5.kinstacdn.com/wp-content/uploads/2019/03/product-shoe-initial.jpg"
							alt=""
						/>
					</PRODUCTS>
				</PRODUCT_CONTAINER>

				<div className="see__more">
					<a href="/">see more &rarr;</a>
				</div>
			</CONTAINER>
		</RATIO__CONTAINER_STYLE>
	)
}

export default PRODUCT_COLLECTION
