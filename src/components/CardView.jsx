import { useEffect, useState } from "react";
import { calculatetotal } from "../services/ProductService";
import { useNavigate } from "react-router-dom";


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
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>total</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        items.map(({ product, quantity }) => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{quantity}</td>
                                <td>{quantity * product.price}</td>
                                <td> <button onClick={() => onDeleteProduct(product.id)}
                                    className="btn btn-danger btn-sm">eliminar</button></td>
                            </tr>
                        ))
                    }
                </tbody>

                <tfoot>
                    <tr>
                        <td colSpan="3" className="text-end fw-bold">Total</td>
                        <td colSpan="2" className="text-start fw-bold">$ {total}</td>
                    </tr>
                </tfoot>

            </table>

            <button className="btn btn-success" onClick={onCatalog}>Seguir comprando</button>
        </>
    )
}

export default CardView
