
export default function PlantCard(props) {
  function addToCart() {
    const copyCartItems = [...props.cartItems];
    const existingItem = copyCartItems.find((i) => {
      return i.id === props.plant.id;
    });
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      copyCartItems.push({
        id: props.plant.id,
        name: props.plant.name,
        image: props.plant.image,
        quantity: 1,
      });
    }
    console.log("New cart contents:", copyCartItems);
    props.setCartItems(copyCartItems);
  }

  return (
    <>
<div className="plant-card">
      <h3 className="plant-img">{props.plant.image}</h3>
      <h4 className="plant-name">{props.plant.name}</h4>
      <button className="addtocart" onClick={() => addToCart(props.plant)}>Add to Cart</button>
    </div>
    </>
  );
}
