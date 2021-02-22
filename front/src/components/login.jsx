import React from 'react';

const Login = props => {
    return (
        <div className="logincontainer">
            <form className="loginform col-6 offset-3 py-5">
                <div className="mb-3 py-5">
                    <label for="exampleInputEmail1" className="form-label">Nombre de Usuario</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 pb-5">
                    <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Ingresar</button>
            </form>
        </div>
    );
}

export default Login;