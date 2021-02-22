import React from 'react';
import CobOnl from '../../img/logoCO.png';
import LogoPP from "../../img/logoProtegePyme.png";

const OurJob = props => {
    return (
        <section className="container2 py-5" name="ourjob" id="ourjob" >
            <div className="top pt-5">
                <h1>¿Como trabajamos?</h1>
            </div>
            <div className="bottom pb-5">
                <img src={CobOnl} className="CobOnl" alt="CobOnl" />
                <img src={LogoPP} className="LogoPP" alt="LogoPP" />
                <div>
                    <h1>Cobranza extrajudicial</h1>
                    <h3>“Si no recuperas, no pagas”</h3>
                </div>
                <ul className="justify-content-center">
                    <li>Presentamos las demandas de cobro dentro de 48 hrs. Desde que se envían todo los antecedentes solicitados.</li>
                    <li>Te informamos periódicamente del estado del juicio</li>
                    <li>Protegemos a las Pymes</li>
                    <li>Cobramos precios justos, según el monto y fecha de la deuda. Cotiza en el mercado!</li>
                </ul>
            </div>
            <div className="break">
                <div className="aviso mx-auto py-5 px-3">
                    <h1>Si no te pagaron... No todo esta perdido!</h1>
                    <p><strong>¡RECUPERA TU DINERO!</strong> Tienes el derecho a cobrar judicialmente lo que no te pagaron, prueba con nosotros!</p>
                    <div className="btn btn-success">Contáctanos</div>
                </div>
            </div>
        </section>
    );
}

export default OurJob;