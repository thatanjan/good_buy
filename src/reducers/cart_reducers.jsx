export const initial_state = [
	{ items: ['apple', 'grave', 'shite'] },
	{
		total_price: 0,
		// total_items: this[0].items.length,
	},
]

export const cart_reducer = (state, { type, item }) => {
	let { name, price, in_the_cart } = item
	// let [{ items }, { total_price }] = state
	console.log(name, in_the_cart)

	switch (type) {
		case 'add to cart':
			state[1].total_price += price
			item.in_the_cart = true
			state[0].items.push(item)
			return state
		// break

		case 'delete from cart':
			return null
		// break

		default:
			return null
	}
}

// export const getCartReducer = () => {
// 	return useReducer(cart_reducer, initial_state)
// }
