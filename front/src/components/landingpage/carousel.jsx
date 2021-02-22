import React from 'react';

const Carousel = props => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        src="https://updatemexico.com/wp-content/uploads/2019/11/prestamos-para-pagar-deudas-1024x683.jpg"
                        className="d-block w-100" alt="underconstruction" height="520px" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5><strong>¿TU CLIENTE TE DEBE PLATA Y NO SABES QUE HACER?</strong></h5>
                        <p>Ni siquira te contesta el telefono?</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src="https://ca-times.brightspotcdn.com/dims4/default/9ab8f66/2147483647/strip/true/crop/800x450+0+0/resize/840x473!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fe7%2Fd1%2F44721591393a5d10b29a8ef3c5e1%2Fla-es-cobradores-de-deudas-ahora-podrian-envia-001"
                        className="d-block w-100" alt="negocios" height="520px" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>NOSOTROS TE HACEMOS LA VIDA MAS FACIL!!!</h5>
                        <p>Cobramos por ti!!!</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src="https://www.telecheque.cl/blog/wp-content/uploads/2019/07/cobranza-judicial.jpeg"
                        className="d-block w-100" alt="fullstack" height="520px" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>REALIZAMOS LA COBRANZA JUDICIAL...</h5>
                        <p>... Y todos los tramites por ti!</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://www.superatugrado.cl/images/slide_equipo_abogados.jpg"
                        className="d-block w-100" alt="agil" height="520px" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>POR QUE TENEMOS UN GRAN EQUIPO DE TRABAJO</h5>
                        <p>Con muy expertos abogados!</p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}

export default Carousel;