import { useNavigate } from "react-router-dom";
import { CurrencyFormat } from "./Custom/helperFormatNumber";


export const CatalogItem = ({ image,name, description, price, id, handler }) => {

    //hook
    const navigate = useNavigate();

    console.log(image);

    const onAddProduct = (product) => {
        //console.log(product);
        handler(product);

        navigate('/cart')
    }

    return (
        <>
            <div className="card ">
                <div className="card-body">
                    <img src={image} className="card-img-top" alt="..." />
                    <p className="card-title">{name}</p>
                    <p className="card-text ">{description}</p>
                    <h1 className="card-text text-tam"> <b>$ {CurrencyFormat(price)  }</b></h1>
                    <br />
                    <button
                        onClick={() => onAddProduct({ name, description, price, id })}
                        className="btn btn-warning  ">
                            <i className="fa fa-shopping-cart"></i>
                        Agregar Producto</button>
                </div>
            </div>



    
      


        </>
    )
}

