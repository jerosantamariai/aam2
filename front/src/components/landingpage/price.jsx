import React from 'react';

const Price = props => {
    return (
        <div className="container4" name="price" id="price">
            <div className="top d-flex justify-content-center py-5">
                <h1>Nuestros Precios</h1>
            </div>
            <div className="bottom content-center">
                <table className="mx-auto">
                    <tr>
                        <th>TRAMO DEUDA</th>
                        <th>COMISIÓN DE RECUPERO</th>
                        <th>ANTICIPO A TODO EVENTO (se imputa y deduce de la comisión)</th>
                    </tr>
                    <tr>
                        <td>$ 3.000.000 - $ 4.999.999</td>
                        <td>17%</td>
                        <td>$ 289.000</td>
                    </tr>
                    <tr>
                        <td>$ 5.000.000 - $ 9.999.999</td>
                        <td>15%</td>
                        <td>$ 379.000</td>
                    </tr>
                    <tr>
                        <td>$ 10.000.000 - $ 20.000.000</td>
                        <td>12%</td>
                        <td>$ 399.000</td>
                    </tr>
                    <tr>
                        <td>Sobre $ 20.000.000</td>
                        <td>10%</td>
                        <td>$ 439.000</td>
                    </tr>
                </table>
                <ul className="obs text-center">
                    <li>No incluye costas gastos del juicio.</li>
                    <li>Juicios ordinarios.</li>
                    <li>Desde 12 UF.</li>
                </ul>
            </div>
            <div className="break py-5">
                <div className="aviso mx-auto py-5 px-3">
                    <h1>No te lleves sorpresas con los cobros!</h1>
                    <p><strong>Nuestros precios son transparentes</strong> y por eso te invitamos a contactarnos con nosotros.</p>
                    <a className="nav-link btn btn-success" href="#form" role="button">Contáctanos</a>
                </div>
            </div>
        </div>
    );
}

export default Price;