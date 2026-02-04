export default function Cart({ cartItems, plantIncrease, plantDecrease }) {
  return (
    <>
      <h2>Cart</h2>
      {cartItems.map((i) => {
        return (
          <div key={i.id}>
            <span>{i.image}</span>
            <span>{i.name}</span>
            <button onClick={() => plantIncrease(i.id)}>+</button>
            <button onClick={() => plantDecrease(i.id)}>-</button>
            <span>{i.quantity}</span>
          </div>
        );
      })}
    </>
  );
}
