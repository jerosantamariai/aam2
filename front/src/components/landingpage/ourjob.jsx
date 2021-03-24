import React from 'react';
import CobOnl from '../../img/logoCO.png';
import LogoPP from "../../img/logoProtegePyme.png";

const OurJob = props => {
    return (
        <section className="container2 no-gutters" name="ourjob" id="ourjob" >
            <div className="row position-inherit no-gutters">
                <div className="col-12 text-center position-inherit no-gutters">
                    <h1>¿Cómo trabajamos?</h1>
                </div>
            </div>
            <div className="row topOJ text-center py-5 position-inherit no-gutters">
                <div className="col-6 tlOJ position-inherit no-gutters text-center">
                    <h3>Paso 1 :</h3>
                    <img src={CobOnl} className="CobOnl" alt="CobOnl" />
                    {/* <div>
                        <h2>Cobranza extrajudicial</h2>
                        <h4>“Si no recuperas, no pagas”</h4>
                    </div> */}
                </div>
                <div className="col-6 position-inherit no-gutters text-center">
                    {/* <div className="col-6 brOJ position-inherit no-gutters"> */}
                    <h3>Paso 2 :</h3>
                        <img src={LogoPP} className="LogoPP position-inherit" alt="LogoPP" />
                        {/* <ul className="justify-content-center position-inherit">
                            <li>Presentamos las demandas de cobro dentro de 48 hrs. Desde que se envían todo los antecedentes solicitados.</li>
                            <li>Te informamos periódicamente del estado del juicio</li>
                            <li>Protegemos a las Pymes</li>
                            <li>Cobramos precios justos, según el monto y fecha de la deuda. Cotiza en el mercado!</li>
                        </ul> */}
                    {/* </div> */}
                </div>
            </div>
            <div className="break no-gutters">
                <div className="aviso mx-auto py-5 px-auto no-gutters">
                    <h1>Si no te pagaron... No todo esta perdido!</h1>
                    <p><strong>¡RECUPERA TU DINERO!</strong> Tienes el derecho a cobrar judicialmente lo que no te pagaron, prueba con nosotros!</p>
                    <a className="nav-link btn btn-success" href="#form" role="button">Contáctanos</a>
                </div>
            </div>
        </section>
    );
}

export default OurJob;