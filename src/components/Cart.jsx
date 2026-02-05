export default function Cart({ cartItems, plantIncrease, plantDecrease }) {
  return (
    <>
      <h2>Cart</h2>
      {cartItems.map((i) => {
        return (
          <div key={i.id} className="cart-card">
            <div className="cart-items">
            <span>{i.image}</span>
            <span>{i.name}</span>
            </div>
            <div className="btns">
            <button onClick={() => plantIncrease(i.id)}>+</button>
            <button onClick={() => plantDecrease(i.id)}>-</button>
            </div>
            <span>{i.quantity}</span>
          </div>
        );
      })}
    </>
  );
}
