import React from 'react';
import LogoPPT from '../../img/logotrasparente.png';
import Typical from 'react-typical';

const Welcome = props => {
    return (
        <section className="container1 color-verde d-flex">
            <div className="row mx-auto d-flex justify-content-center rowW no-gutters">
                <div className="content cuadro col-sm-12 col-md-6 position-inherit my-auto">
                    <h1 className="d-flex justify-content-center p-3">Cobranza judicial de</h1>
                    <h2 className="d-flex justify-content-center p-3">
                        <Typical
                            loop={Infinity}
                            wrapper='b'
                            steps={[
                                'Facturas,',
                                1000,
                                'cheques,',
                                1000,
                                'pagarés',
                                1000,
                                'y otros documentos.',
                                2000,
                            ]}
                        /></h2>
                    <h4 className="d-flex justify-content-center p-3">Estudio jurídico 100% online</h4>
                </div>
                <div className="photo col-sm-12 col-md-6 position-inherit text-center my-auto">
                    <img src={LogoPPT} alt="logopp" className="logoPPOJ" />
                </div>
            </div>
        </section>
    );
}

export default Welcome;