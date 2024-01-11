import { Products } from "../data/products";

export const getProducts = ()=>Products;
export const calculatetotal  = (items)=>items.reduce((accumulator, item) => accumulator + item.product.price * item.quantity,0);
