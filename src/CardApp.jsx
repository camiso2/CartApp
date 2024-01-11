


import useItemsCart from './hooks/useItemsCart';
import Navbar from "./components/Navbar";
import CartRoutes from './routes/CartRoutes';


export const CardApp = () => {
    //desestructurando useItemsCart()
    const { handlerAddProductCart, handleDeleteProductCart, cardItems } = useItemsCart();
    return (
        <>
            <div className="container">
                <Navbar />
                <CartRoutes handlerAddProductCart={handlerAddProductCart} handleDeleteProductCart={handleDeleteProductCart} cardItems={cardItems}/>   
            </div>
        </>

    );

}