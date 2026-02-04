import React, { useState } from "react";
import PLANTS from "./data";
import Cart from "./components/Cart";
import PlantCard from "./components/Plant";
import { cartIncrease } from "./components/PlusItem";
import { cartDecrease } from "./components/MinusItem";

export default function App() {
  const [cartItems,setCartItems] = useState([]);

  function plantIncrease(id) {
    setCartItems((prevCart) => cartIncrease(prevCart, id));
  }
    function plantDecrease(id) {
    setCartItems((prevCart) => cartDecrease(prevCart, id));
  }

  return (
    <>
      <h1>Proper Plants</h1>

      {PLANTS.map((plant) => (
        <PlantCard key={plant.id} plant={plant} cartItems={cartItems} setCartItems={setCartItems} ></PlantCard>
      ))}

      <Cart cartItems={cartItems} plantIncrease={plantIncrease} plantDecrease={plantDecrease} />
    </>
  );
}
