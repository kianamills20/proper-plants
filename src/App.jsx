import React, { useState } from "react";
import PLANTS from "./data";
import Cart from "./components/Cart";
import PlantCard from "./components/Plant";

export default function App() {
  const [cartItems,setCartItems] = useState([]);
  return (
    <>
      <h1>Proper Plants</h1>

      {PLANTS.map((plant) => (
        <PlantCard key={plant.id} plant={plant}  ></PlantCard>
      ))}

      <Cart />
    </>
  );
}
