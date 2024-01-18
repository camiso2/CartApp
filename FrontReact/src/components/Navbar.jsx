import { NavLink, useNavigate } from "react-router-dom"
import { CurrencyFormat } from "./Custom/helperFormatNumber";


const Navbar = ({   title, total}) => {


   const navigate  = useNavigate();
   const onCart = ()=>{

    navigate('/cart')

}

    return (
        <>
            <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="/"><i className="fa fa-birthday-cake"></i>{title}</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                    className={'nav-link'} to='/'> | Inicio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={'nav-link'} to='catalogo'> | Catalogo</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={'nav-link'} to='cart'> | Lista de Productos</NavLink>
                            </li>

                        </ul>

                        <button 
                        className="btn btn-outline-success"
                         onClick={onCart} type="submit"> <b> {(total<1)?'No tiene Productos Agregados!': 'Total : $ '+CurrencyFormat(total) }</b></button>

                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar
