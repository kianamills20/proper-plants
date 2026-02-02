export default function Cart(){
    function cartIncrease(id){
        const copyCartItems = [...props.cartItems];
        for(let i = 0; i < copyCartItems.length; i++){
            if(copyCartItems[i].id === id){
                copyCartItems[i] = {
                    ...copyCartItems[i], 
                    quantity: copyCartItems[i].quantity + 1, 
                }
            }
        }
        props.setCartItems(copyCartItems);
    }
    return(
        <>   
         <h2>Cart</h2>
         {props.cartItems.map((i) => {
            <div>
            <span>{i.item}</span> 
            <span>{i.name}</span>
            <span>{i.quantity}</span>
            </div>
         }
        )}
         </>
    );
}