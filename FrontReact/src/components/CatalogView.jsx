import { useEffect, useState } from "react";
import { getProducts } from "../services/ProductService";

import { CatalogItem } from "./CatalogItem";


export const CatalogView = ({ title, handler }) => {


 console.log(getProducts());
    const [products, setProducts] = useState([]);

    //retorna datos de backend
    const findAllSpringBoot = async()=>{
       const  productSpringBoot = await getProducts();
       setProducts(productSpringBoot);
    }
    useEffect(
        () => {
            findAllSpringBoot();
        }, []
    )


    return (
        <>

            <br />
            <h4 >{title}</h4>
            <hr />
            <div className="row">
                {
                    products.map(({ image, name, description, price, id }) => (
                        <div className="col-4 my-2  "
                            key={id} >
                            <CatalogItem
                                handler={handler}
                                id={id}
                                name={name}
                                description={description}
                                price={price} 
                                image={image}/>

                        </div>
                    ))
                }


            </div>




        </>
    )
}


