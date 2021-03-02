import React from 'react';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';

const Footer = props => {
    return (
        <>
            <footer className="footer">
                <div className="footerContainer">
                    <div className="row text-center d-flex justify-content-center pt-4">
                        <div className="col-md-2 my-2">
                            <h6 className="text-uppercase font-weight-bold noDecoration">
                                <Link className="stdbtn" to="#!">Conoceme!</Link>
                            </h6>
                        </div>
                        <div className="col-md-2 my-2">
                            <h6 className="text-uppercase font-weight-bold noDecoration">
                                <Link className="stdbtn" to="#!">Blog</Link>
                            </h6>
                        </div>
                        <div className="col-md-2 my-2">
                            <h6 className="text-uppercase font-weight-bold noDecoration">
                                <Link className="stdbtn" to="#!">Contacto</Link>
                            </h6>
                        </div>
                    </div>
                    <hr className="w-75 mx-auto" />
                    <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">
                        <div className="col-md-8 col-12 my-2">
                            <p>Teléfono: <a href="tel:+56931816173">+56 9 3181 6173</a></p>
                            <p> Correo <a href="mailto:abogados@protegepyme.com">abogados@protegepyme.com</a></p>
                        </div>
                    </div>
                    <hr className="w-75 mx-auto" />
                    <div className="row py-2">
                        <div className="col-md-12">
                            <div className="mb-4 d-flex justify-content-center">
                                <a className="stdbtn" rel="noreferrer noopener" href="http://www.facebook.com" target="_blank">
                                    <i className="fab fa-facebook-f fa-lg white-text mr-5"> </i>
                                </a>
                                <a className="stdbtn" rel="noreferrer noopener" href="http://www.twitter.com" target="_blank">
                                    <i className="fab fa-twitter fa-lg white-text mr-5"> </i>
                                </a>
                                <a className="stdbtn" rel="noreferrer noopener" href="http://www.linkedin.com" target="_blank">
                                    <i className="fab fa-linkedin-in fa-lg white-text mr-5"> </i>
                                </a>
                                <a className="stdbtn" rel="noreferrer noopener" href="http://www.github.com" target="_blank">
                                    <i className="fab fa-github fa-lg white-text mr-5"> </i>
                                </a>
                                <a className="stdbtn" rel="noreferrer noopener" href="http://www.instagram.com" target="_blank">
                                    <i className="fab fa-instagram fa-lg white-text mr-5"> </i>
                                </a>
                                <a className="stdbtn" rel="noreferrer noopener" href="http://www.pinterest.com" target="_blank">
                                    <i className="fab fa-pinterest fa-lg white-text"> </i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="w-75 mx-auto" />
                <div className="d-flex justify-content-center">
                    <p className="firma">Diseñado y programado por <strong><a href="http://www.santamariai.cl">JEROSANTAMARIAI</a></strong></p>
                </div>
            </footer>

        </>
    );
}

export default Footer;