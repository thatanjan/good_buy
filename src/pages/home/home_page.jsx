import React from 'react'
// import BANNER from 'components/banner/banner'
import PRODUCT from 'components/product/product'
import ALL_PRODUCT_WRAPPER from 'components/product_group/product_group'

import product_image from 'assets/product.jpg'

const product = {
	name: 'mobile',
	price: 100,
	in_the_cart: false,
}
const HOME = () => {
	return (
		<>
			{/* <BANNER /> */}

			<ALL_PRODUCT_WRAPPER>
				<PRODUCT
					title={product.title}
					price={100}
					rating={5}
					image={product_image}
				/>
				<PRODUCT
					title={product.title}
					price={100}
					rating={5}
					image={product_image}
				/>
				<PRODUCT
					title={product.title}
					price={100}
					rating={5}
					image={product_image}
				/>
				<PRODUCT
					title={product.title}
					price={100}
					rating={5}
					image={product_image}
				/>
			</ALL_PRODUCT_WRAPPER>
		</>
	)
}

export default HOME
