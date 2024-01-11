import { useNavigate } from "react-router-dom";
import { CurrencyFormat } from "./Custom/helperFormatNumber";
import { SweetAlertConfirmKeepBuying } from "./SweetAlert/Sweet";


export const CatalogItem = ({ image,name, description, price, id, handler }) => {

    //hook
    const navigate = useNavigate();
    const onAddProduct = (product) => {
        //console.log(product);
        handler(product);
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
                        onClick={
                            () =>{
                                SweetAlertConfirmKeepBuying((result) => {
                                    if (result) { 
                                        navigate('/cart')
                                    }
                                });
                                onAddProduct({ name, description, price, id })
                            }    
                        }
                        className="btn btn-warning  ">
                            <i className="fa fa-shopping-cart"></i>
                        Agregar Producto</button>
                </div>
            </div>



    
      


        </>
    )
}

