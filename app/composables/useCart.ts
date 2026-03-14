export interface Product {
  name: string;
  price: string;
  image: string;
}

export const useCart = () => {
  const cart = useState<Product[]>('cart', () => [])
  const isCartOpen = useState('isCartOpen', () => false)

  const addToCart = (product: Product) => {
    cart.value.push(product)
    isCartOpen.value = true // Auto-open cart when adding item
  }

  const removeFromCart = (index: number) => {
    cart.value.splice(index, 1)
  }

  const cartTotal = computed(() => {
    return cart.value.reduce((total, item) => {
      // Extract numbers from strings like "₹ 5000"
      const priceValue = parseInt(item.price.replace(/[^\d]/g, ''), 10)
      return total + (isNaN(priceValue) ? 0 : priceValue)
    }, 0)
  })

  return {
    cart,
    isCartOpen,
    addToCart,
    removeFromCart,
    cartTotal
  }
}
