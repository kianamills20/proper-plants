export default function Cart({cartItems}){
//    function cartIncrease(id){
//         const copyCartItems = [...props.cartItems];
//         for(let i = 0; i < copyCartItems.length; i++){
//             if(copyCartItems[i].id === id){
//                 copyCartItems[i] = {
//                     ...copyCartItems[i], 
//                     quantity: copyCartItems[i].quantity + 1, 
//                 }
//             }
//         }
//         props.setCartItems(copyCartItems);
//     }
    return(
        <>   
         <h2>Cart</h2>
         {cartItems.map((i) => {
            return(  <div key={i.id}>
            <span>{i.image}</span> 
            <span>{i.name}</span>
            <span>{i.quantity}</span>
            </div>);
         }
        )}
         </>
    );
}