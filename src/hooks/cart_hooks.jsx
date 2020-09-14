import { useContext } from 'react'
import { CART_CONTEXT } from 'contexts/cart_context'

export const useCartContext = () => {
	return useContext(CART_CONTEXT)
}
