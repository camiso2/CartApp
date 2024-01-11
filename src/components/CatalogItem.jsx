import { useNavigate } from "react-router-dom";


export const CatalogItem = ({ name, description, price, id, handler }) => {

    //hook
    const navigate = useNavigate();

    const onAddProduct = (product) => {
        //console.log(product);
        handler(product);

        navigate('/cart')
    }

    return (
        <>
            <div className="card ">
                <div className="card-body">
                    <img src="/test.jpg" class="card-img-top" alt="..."/>
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"> {description}</p>
                    <p className="card-text text-tam"> <b>$ {price}</b></p>
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

