import React from 'react';
import { Link } from 'react-router-dom';
import LogoProtegePyme from '../img/logoProtegePyme.png';
// import Form from './landingpage/form';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light personalColor">
                <div className="container py-2">
                    <Link className="navbar-brand" to="/" width="120"><img src={LogoProtegePyme} alt="ProtegePyme" width="120"/></Link>
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
                                <a className="nav-link" href="#whypp">¿Porqué Nosotros?</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#price">Precios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#form">Contacto</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" to="#">Conoceme!</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" to="#">Blog</a>
                            </li> */}
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="https://api.whatsapp.com/send?phone=56931816173" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp fa-2x mr-2"></i></a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link btn btn-success rounded-pill" to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;