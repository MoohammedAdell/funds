import { useCart } from "./StoreCart";

function Cart() {
  const cartItem = useCart((state) => state.cart);
  const addToCart = useCart((state) => state.addToCart);
  const removeFromCart = useCart((state) => state.removeFromCart);
  const decreaseQty = useCart((state) => state.decreaseQty);

  const totalQty = useCart((state) =>
    state.cart.reduce((total, item) => total + item.qty, 0),
  );
  const totalPrice = useCart((state) =>
    state.cart.reduce((total, item) => total + item.price * item.qty, 0),
  );

  const products = [
    { id: 1, title: "Phone", price: 1000 },
    { id: 2, title: "Laptop", price: 20000 },
    { id: 3, title: "Headphones", price: 500 },
    { id: 4, title: "Keyboard", price: 800 },
  ];

  return (
    <>
      <h2>🛍️ Products</h2>

      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: "10px" }}>
          <strong>{product.title}</strong> - {product.price} EGP
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}

      <hr />

      <h2>🛒 Cart ({totalQty})</h2>

      {cartItem.length === 0 && <p>Cart is empty</p>}

      {cartItem.map((item) => (
        <div key={item.id} style={{ marginBottom: "8px" }}>
          {item.title} - Qty: {item.qty}
          Total: {item.price * item.qty} EGP
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => decreaseQty(item.id)}
          >
            ➖
          </button>
          <button
            style={{ marginLeft: "5px" }}
            onClick={() => removeFromCart(item.id)}
          >
            ❌
          </button>
        </div>
      ))}

      <h4>Total Qty: {totalQty}</h4>
      <h4>Total Price: {totalPrice}</h4>
    </>
  );
}

export default Cart;
