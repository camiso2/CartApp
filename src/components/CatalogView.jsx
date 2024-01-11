import { useEffect, useState } from "react";
import { getProducts } from "../services/ProductService";

import { CatalogItem } from "./CatalogItem";


export const CatalogView = ({ title, handler }) => {



    const [products, setProducts] = useState([]);
    useEffect(
        () => {
            setProducts(getProducts());
        }, []
    )


    return (
        <>

            <h1>{title}</h1>
            <hr />
            <div className="row">
                {
                    products.map(({ name, description, price, id }) => (
                        <div className="col-4 my-2  "
                            key={id} >
                            <CatalogItem
                                handler={handler}
                                id={id}
                                name={name}
                                description={description}
                                price={price} />

                        </div>
                    ))
                }

                
            </div>

           


        </>
    )
}


