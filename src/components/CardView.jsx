import { useEffect, useState } from "react";
import { calculatetotal } from "../services/ProductService";
import { useNavigate } from "react-router-dom";
import { CurrencyFormat } from "./Custom/helperFormatNumber";


const CardView = ({ title, items, handlerDelete }) => {

    const [total, setTotal] = useState(0);
    useEffect(() => {
        setTotal(calculatetotal(items));
    }, [items]);



    const onDeleteProduct = (id) => {
        //  console.log('Eliminando item')
        return handlerDelete(id);
    }


    const navigate  =  useNavigate();
    const onCatalog = ()=>{

        navigate('/catalogo')

    }


    return (
        <>
            <h3>{title}</h3>
            <hr />
            <table className="table table-responsive table-striped table-over ">
                <thead>
                    <tr>
                        <th className="wcf-prod">Producto</th>
                        <th className="wcf-price">Precio</th>
                        <th className="wcf-cant">Cantidad</th>
                        <th className="wcf-total">Sub-Total</th>
                        <th className="wcf-delete">Eliminar</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        items.map(({ product, quantity }) => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>$ {CurrencyFormat(product.price)  }</td>
                                <td>{quantity}</td>
                                <td>$ { CurrencyFormat(quantity * product.price) }</td>
                                <td> <button onClick={() => onDeleteProduct(product.id)}
                                    className="btn btn-danger btn-xs"><i className="fa fa-trash"></i>eliminar</button></td>
                                    
                            </tr>
                            
                        ))
                    }
           
                </tbody>


                <tfoot>
                
                   
                    <tr className="new-hr">
                        <td colSpan="4" className="text-end fw-bold tam-total"><b>TOTAL COMPRA</b></td>
                        <td colSpan="2" className="text-start fw-bold tam-total"> <b>  $ { CurrencyFormat(total) }</b> </td>
                    </tr>
                </tfoot>

            </table>

            <button className="btn btn-warning" onClick={onCatalog}>   <i className="fa fa-arrow-circle-left"></i>  Seguir comprando</button>
        </>
    )
}

export default CardView
