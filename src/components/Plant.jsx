
export default function PlantCard(props){
    function addToCart(){
        const copyCartItems = [...props.cartItems];
        const existingItem = copyCartItems.find((i) => {
          return  i.id === props.plant.id;
        });
        if(existingItem){
            existingItem.quantity += 1;
        }else{
            copyCartItems.push({id: props.plant.id, name: props.plant.name, image: props.plant.image, quantity: 1,})
        };
         console.log("New cart contents:", copyCartItems);
        props.setCartItems(copyCartItems);
    }

return <>
<h3>{props.plant.image}</h3>
<h4>{props.plant.name}</h4>
<button  onClick={() => addToCart(props.plant)}>Add to Cart</button>
<h2>Plants</h2>
</>
}
