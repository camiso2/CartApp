import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "./itemsActions";


const itemsReducer = (state = [], action) => {


    switch (action.type) {

        case AddProductCart:

            return [
                ...state,
                {
                    product: action.payload,
                    quantity: 1,
                    //total: product.price * 1,
                }
            ];


        case UpdateQuantityProductCart:

            return state.map((i)=>{
                if(i.product.id === action.payload.id ){
                    //i.quantity = i.quantity + 1;
                    return {
                        ...i,
                        quantity:i.quantity + 1,

                    }
                }
                return i;
            });


        case DeleteProductCart:

            // opc1
            // return [
            //     ...state.filter((i)=>i.product.id !== action.payload),
            // ];

            // opc2
           return state.filter((i)=>i.product.id !== action.payload)


        default:
            return state;
    }
}

export default itemsReducer
