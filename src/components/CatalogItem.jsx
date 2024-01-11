import { useNavigate } from "react-router-dom";
import { CurrencyFormat } from "./Custom/helperFormatNumber";
import { SweetAlertConfirmKeepBuying } from "./SweetAlert/Sweet";
import ModalDetails from "./ModalDetails";


import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export const CatalogItem = ({ image, name, description, price, id, handler }) => {

    //hook
    const navigate = useNavigate();
    const onAddProduct = (product) => {
        //console.log(product);
        handler(product);
    }


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="card ">
                <div className="card-body">
                    <img src={image} className="card-img-top" alt="..." />
                    <p className="card-title">{name}</p>
                    <p className="card-text ">{description}</p>
                    <h1 className="card-text text-tam"> <b>Costo :  $ {CurrencyFormat(price)}</b> <span className="cop">COP</span></h1>
                    <br />
                    <button
                        onClick={
                            () => {
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
                        Agregar Producto
                    </button>



                    <Button variant="primary" onClick={handleShow}>
                        <i className="fa fa-eye"></i>
                        Detalles
                    </Button>

                    <Modal show={show} onHide={handleClose} >

                        <Modal.Body>
                            <p className="card-title">{name} <hr />
                            </p>
                            <img src={image} className="card-img-top" alt="..." />
                            <b>DESCRIPCIÓN</b> <br />{description}
                            <h1 className="card-text text-tam"><br /> <b>Costo :  $ {CurrencyFormat(price)}</b> <span className="cop">COP</span><br /></h1>
                            

                        </Modal.Body>
                        <Modal.Footer>
                        <button
                                onClick={
                                    () => {
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
                                Agregar Producto
                            </button>

                            <button className="btn btn-primary" onClick={handleClose}>
                                <i className="fa fa-close"></i>
                                Cerrar Detalles
                            </button>
                        </Modal.Footer>
                    </Modal>

                </div>
            </div>







        </>
    )
}

