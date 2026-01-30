
export default function PlantCard(props){
    function addToCart(){
        const copyCartItems = [...props.cartItems];
        copyCartItems.push(props.plant.name);
         console.log("New cart contents:", copyCartItems);
        props.setCartItems(copyCartItems);
    }

return <>
<h3>{props.plant.image}</h3>
<h4>{props.plant.name}</h4>
<button onClick={ addToCart }>Add to Cart</button>
<h2>Plants</h2>
</>
}
