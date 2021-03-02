import React from 'react';
import LogoPP from '../../img/logoProtegePyme.png';
import Typical from 'react-typical';

const Welcome = props => {
    return (
        <section className="container1 color-verde d-flex">
            <div className="row mx-auto rowOJ">
                <div className="content col-6 position-inherit my-auto">
                    <h1 className="d-flex justify-content-center">Cobranza judicial de</h1>
                    <h2 className="d-flex justify-content-center">
                        <Typical
                            loop={Infinity}
                            wrapper='b'
                            steps={[
                                'Facturas,',
                                1000,
                                'cheques',
                                1000,
                                'y pagarés',
                                1500,
                            ]}
                        /></h2>
                    <p className="d-flex justify-content-center">Estudio jurídico 100% online</p>
                </div>
                <div className="photo col-6 position-inherit text-center my-auto">
                    {/* <p>Aqui va una imagen con fondo trasparente</p> */}
                    <img src={LogoPP} alt="logopp" className="logoPPOJ" />
                </div>
            </div>
        </section>
    );
}

export default Welcome;