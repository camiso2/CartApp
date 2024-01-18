import { Navigate, Route, Routes } from "react-router-dom"
import CardView from "../components/CardView"
import { CatalogView } from "../components/CatalogView"


const CartRoutes = ({ handlerAddProductCart, handleDeleteProductCart, cardItems }) => {
    return (
        <>
            <Routes>
                <Route path="Catalogo"
                    element={
                        <CatalogView
                            title={'CATALOGO DE PRODUCTOS...'}
                            handler={product => handlerAddProductCart(product)} />
                    } />
                <Route path="cart" element={(
                    <div className="my-4 w-100">
                        {cardItems?.length <= 0 ?
                            <div className="alert alert-warning">
                                NO hay productos agregados
                            </div>
                            :
                            <CardView
                                title={'CARRO DE COMPRAS'}
                                items={cardItems}
                                handlerDelete={id => handleDeleteProductCart(id)}
                            />
                        }
                    </div>
                )
                } />
                <Route path="/" element={<Navigate to={'catalogo'} />} />
            </Routes>

        </>
    )
}

export default CartRoutes
