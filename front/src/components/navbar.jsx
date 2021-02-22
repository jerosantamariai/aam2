import React from 'react';
import { Link } from 'react-router-dom';
import LogoProtegePyme from '../img/logoProtegePyme.png';
// import Form from './landingpage/form';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light personalColor">
                <div className="container py-2">
                    <Link className="navbar-brand" to="/"> <img src={LogoProtegePyme} alt="ProtegePyme" width="120"   />  </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon">
                            <i class="fas fa-align-justify"></i>
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                                <a className="nav-link" href="#ourjob">¿Cómo Trabajamos?</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/whypp">¿Porqué Nosotros?</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/price">Precios</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/form">Contacto</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Conoceme!</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Blog</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="#"><i className="fab fa-whatsapp fa-2x mr-2"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link btn btn-success rounded-pill" to="#">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;