import React from 'react';

const Form = props => {
    return (
        <section id="form" className="formContainer py-5">
            <div className="subForm col-md-8 offset-md-2 px-auto py-5 shadow-sm rounded position-inherit" >
                <div className="row">
                    <div className="col position-inherit">
                        <h1>Escribenos!</h1>
                        <h4>Cuentanos tu problema y nos ponemos en contacto lo antes posible!</h4>
                    </div>
                </div>
                <div>
                    <form className="col-md-8 offset-md-2 position-inherit" method="post" action="enviar.php">
                        <div className="form-row" >
                            <div className="col position-inherit" >
                                <input type="text" className="form-control my-2" name="nombre" required="required" placeholder="Nombre y Apellido" />
                            </div>
                        </div>
                        <div className="form-row" >
                            <div className="col position-inherit">
                                <input type="text" className="form-control my-2" name="tel" required="required" placeholder="Teléfono - +569XXXXXXXX" />
                            </div>
                        </div>
                        <div className="form-row" >
                            <div className="col position-inherit">
                                <input type="email" className="form-control my-2" name="email" required="required" placeholder="Correo Electrónico" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col position-inherit">
                                <textarea class="form-control my-2" id="textArea" rows="8" name="info" required="required" placeholder="Cuentame aquí como te puedo ayudar..."></textarea>
                            </div>
                        </div>
                        <div className="form-row" >
                            <div className="col position-inherit">
                                <button className="btn btn-primary" type="submit">Enviar</button>
                            </div>
                        </div>
                        <div>
                            <p>Recuerda que nos puedes llamar al teléfono <a href="tel:+56931816173">+56 9 3181 6173</a> o escribirnos al correo <a href="mailto:abogados@protegepyme.com">abogados@protegepyme.com</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Form;