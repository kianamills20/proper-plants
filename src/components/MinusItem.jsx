export function cartDecrease(cart, id) {
  const newCart = [...cart];

  for (let i = 0; i < newCart.length; i++) {
    if (newCart[i].id === id) {
      const newQuantity = newCart[i].quantity - 1;

      if (newQuantity <= 0) {
        newCart.splice(i, 1);
      } else {
        newCart[i] = {
          ...newCart[i],
          quantity: newQuantity,
        };
      }
    }
    break;
  }
  return newCart;
}
