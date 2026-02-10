import { useCart } from "./StoreCart";

function Cart() {
  const cartItem = useCart((state) => state.cart);
  const addToCart = useCart((state) => state.addToCart);
  const removeFromCart = useCart((state) => state.removeFromCart);

  const product = { id: 1, title: "Phone" };

  return (
    <>
      <div>Cart Items: {cartItem.length}</div>

      <button onClick={() => addToCart(product)}>
        Add to cart
      </button>

      <button onClick={() => removeFromCart(1)}>
        Remove from cart
      </button>
    </>
  );
}

export default Cart;
