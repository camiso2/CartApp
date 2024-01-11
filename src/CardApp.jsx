


import useItemsCart from './hooks/useItemsCart';
import Navbar from "./components/Navbar";
import CartRoutes from './routes/CartRoutes';

import { calculatetotal } from './services/ProductService';


export const CardApp = () => {

    
    //desestructurando useItemsCart()
    const { handlerAddProductCart, handleDeleteProductCart, cardItems } = useItemsCart();
    console.log(cardItems);
    return (
        <>
            <div className="container">
                <Navbar title={'CARRO DE COMPRAS'} total={calculatetotal(cardItems)} />
                <CartRoutes handlerAddProductCart={handlerAddProductCart} handleDeleteProductCart={handleDeleteProductCart} cardItems={cardItems}/>   
            </div>
        </>

    );

}