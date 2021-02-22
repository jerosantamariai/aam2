import React from 'react';

const Price = props => {
    return(
        <div className="container4">
            <div className="top d-flex justify-content-center py-5">
            <h1>Precios Referenciales</h1>
            <ul>
                <li>Ingresar tabla de precios en juicios ejecutivos.</li>
                <li>No incluye costas gastos del juicio.</li>
                <li>Juicios ordinarios.</li>
                <li>Desde 12 UF.</li>
                cambiando algo
            </ul>
            </div>
            <div className="bottom content-center py-5">
                <table className="mx-auto">
                    <tr>
                        <th>TRAMO DEUDA</th>
                        <th>COMISIÓN DE RECUPERO</th>
                        <th>ANTICIPO A TODO EVENTO (se imputa y deduce de la comisión)</th>
                    </tr>
                    <tr>
                        <th>$ 3.000.000 - $ 4.999.999</th>
                        <th>17%</th>
                        <th>$ 289.000</th>
                    </tr>
                    <tr>
                        <th>$ 5.000.000 - $ 9.999.999</th>
                        <th>15%</th>
                        <th>$ 379.000</th>
                    </tr>
                    <tr>
                        <th>$ 10.000.000 - $ 20.000.000</th>
                        <th>12%</th>
                        <th>$ 399.000</th>
                    </tr>
                    <tr>
                        <th>Sobre $ 20.000.000</th>
                        <th>10%</th>
                        <th>$ 439.000</th>
                    </tr>
                </table>
            </div>
            <div className="break py-5">
                <div className="aviso mx-auto py-5 px-3">
                    <h1>No te lleves sorpresas con los cobros!</h1>
                    <p><strong>Nuestros precios son transparentes</strong> y por eso te invitamos a contactarnos con nosotros.</p>
                    <div className="btn btn-success">Contáctanos</div>
                </div>
            </div>
        </div>
    );
}

export default Price;