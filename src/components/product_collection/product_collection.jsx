import React from 'react'
import styled from 'styled-components'

const RATIO__CONTAINER_STYLE = styled.div`
	position: relative;
	// height: 40vw;
	width: 100%;
	max-height: 10rem;
	overflow: hidden;
	padding-top: 82.5%;
`

const CONTAINER = styled.div`
	position: absolute;
	background: aqua;
	display: grid;
	grid-template-rows: 15% 1fr 15%;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;

	& h2,
	.see_more {
		// grid-column: 1/3;
		// margin: 0 0 0 5%;
		// align-self: center;
	}

	.see_more {
		// color: #2e2eff;
		// font: 2vh;
	}
`

const PRODUCT_CONTAINER = styled.div`
	display: grid;
	width: 100%;
	height: 100%;
	grid-template-columns: repeat(2, 50%);
	grid-template-rows: repeat(2, 50%);
	background: teal;
`

const PRODUCT = styled.div`
	border: 1px solid black;
	// background: teal;
	height: 50%;
	width: 100%;
	// overflow: hidden;
	& > img {
		height: 100%;
		width: 100%;
		// object-fit: fill;
	}
`

const PRODUCT_COLLECTION = () => {
	return (
		<RATIO__CONTAINER_STYLE>
			<CONTAINER>
				<h2>see the exclusive details below</h2>
				<PRODUCT_CONTAINER>
					<PRODUCT>
						{/* <img */}
						{/* 	src="https://mi0.rightinthebox.com/images/384x384/201807/erlohv1532341226984.jpg" */}
						{/* 	alt="" */}
						{/* /> */}
					</PRODUCT>
					<PRODUCT>
						{/* <img */}
						{/* 	src="https://mk0trickyphotos51tq5.kinstacdn.com/wp-content/uploads/2019/03/product-shoe-initial.jpg" */}
						{/* 	alt="" */}
						{/* /> */}
					</PRODUCT>
					<PRODUCT>
						{/* <img */}
						{/* 	src="https://43.img.avito.st/640x480/5863013643.jpg" */}
						{/* 	alt="" */}
						{/* /> */}
					</PRODUCT>
					<PRODUCT>
						{/* <img */}
						{/* 	src="https://kompark.ru/wp-content/uploads/2019/03/V1AAul9f3ao.jpg" */}
						{/* 	alt="" */}
						{/* /> */}
					</PRODUCT>
				</PRODUCT_CONTAINER>
				<a className="see_more" href="/">
					see more
				</a>
			</CONTAINER>
		</RATIO__CONTAINER_STYLE>
	)
}

export default PRODUCT_COLLECTION
