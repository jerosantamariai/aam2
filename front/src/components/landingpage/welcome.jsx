import React from 'react';
import HammerLaw from '../../img/hammerlaw.png'

const Welcome = props => {
    return (
        <section className="container1 color-verde d-flex py-5">
            <div className="photo col-5 position-inherit text-center">
                {/* <p>Aqui va una imagen con fondo trasparente</p> */}
                <img src={HammerLaw} alt="hammer"/>
            </div>
            <div className="content text-center col-7 position-inherit">
                <h1 className="d-flex justify-content-center pt-5"><strong>!Cobranza judicial de documentos impagos!</strong></h1>
                <h2 className="d-flex justify-content-center pt-5">Facturas, cheques y pagarés.</h2>
                <p className="d-flex justify-content-center pt-5">Estudio jurídico 100% online</p>
            </div>
        </section>
    );
}

export default Welcome;