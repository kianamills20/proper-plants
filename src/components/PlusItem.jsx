export function cartIncrease(cart, id){
  const newCart = [...cart];

  for(let i = 0; i < newCart.length; i++) {
    if(newCart[i].id === id) {
        newCart[i] = {
            ...newCart[i],
            quantity: newCart[i].quantity + 1,
        };
        break;  
      }
  }
  return newCart;
}
