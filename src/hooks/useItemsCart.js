import { useEffect, useReducer } from "react";
import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "../reducer/itemsActions";
import itemsReducer from "../reducer/itemsReducer";

//cuando el navegador se actualiza no se pierden los datos, quedan persistentes
const initialCardsItems = JSON.parse(sessionStorage.getItem('cart')) || [];
const useItemsCart = () => {

     //pertenece a opc1, ojo ->setCardItems
    //const [cardItems, setCardItems] = useState(initialCardsItems);
    const [cardItems, dispath] = useReducer(itemsReducer, initialCardsItems);

    
    useEffect(() => {
        // Almacena la información en sessionStorage
       sessionStorage.setItem("cart", JSON.stringify(cardItems));
    }, [cardItems]);

    const handlerAddProductCart = (product) => {
        // validar si exite en el cardItems 
        const hasItem = cardItems.find((i) => i.product.id === product.id);
        if (hasItem) {

            // opc1
            // setCardItems( //Update
            //     // cardItems.filter((i)=>i.product.id !== product.id),
            //     // {
            //     //     product,
            //     //     quantity:hasItem.quantity+1,
            //     // }

            //     //------------------------------------
            //     // opc2
            //     /*cardItems.map((i)=>{
            //         if(i.product.id === product.id ){
            //             i.quantity = i.quantity + 1;
            //         }
            //         return i;
            //     })*/

            //     // opc3 :: useReducer
            //     //IMPORTANTE
            //     //********************* 
            // );

             // opc2 :: useReducer
            //IMPORTANTE
            //*********************
            dispath(
                {
                    type: UpdateQuantityProductCart,
                    payload: product,
                }
            )

        } else {
            // opc1
            // setCardItems([//Add product
            //     // ...cardItems,
            //     // {
            //     //     product,
            //     //     quantity: 1,
            //     //     //total: product.price * 1,
            //     // }

            // ]);
            // opc2 :: useReducer
            //IMPORTANTE
            //********************* 
            dispath(
                {
                    type: AddProductCart,
                    payload: product,
                }
            )
        }
    }

    const handleDeleteProductCart = (id) => {

        // opc1
        // setCardItems([
        //     ...cardItems.filter((i)=>i.product.id !== id),

        // ]);

        // opc2 :: useReducer
        //IMPORTANTE
        //********************* 
        dispath(
            {
                type: DeleteProductCart,
                payload: id,
            }
        )


    }

  return {
    handlerAddProductCart,
    handleDeleteProductCart,
    cardItems,
    
  }
}

export default useItemsCart
