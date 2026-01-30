
export default function PlantCard(props){
    function addToCart(){
        const copyCartItems = [...props.cartItems];
        copyCartItems.push(props.plant.name);
        props.setCartItems()
        console.log(props);
    }

return <>
<h3>{props.plant.image}</h3>
<h4>{props.plant.name}</h4>
<button >Add to Cart</button>
<h2>Plants</h2>
</>
}
