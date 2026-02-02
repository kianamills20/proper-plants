
export default function PlantCard(props){
    function addToCart(){
        const copyCartItems = [...props.cartItems];
        const existingItem = copyCartItems.find((i) => {
            i.name === props.plant.name 
        });
        if(existingItem){
            existingItem.quanity += 1;
        }else{
            copyCartItems.push({name: props.plant.name, image: props.plant.image, quantity: 1,})
        };
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
