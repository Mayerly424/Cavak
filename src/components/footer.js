import React from "react";


function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col">
                            <h4>Sobre nosotros</h4>
                            <ul>
                                <li><a href="#">¿Quienes somos?</a></li>
                                <li><a href="#">Nuestros servicios</a></li>
                                <li><a href="#">Politica y privacidad</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Ayuda</h4>
                            <ul>
                                <li><a href="#">¿Necesitas ayuda?</a></li>
                                <li><a href="#">JoyasKogi@gmail.com</a></li>
                                <li><a href="#">Comunicate con nosotros</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Ubicación y horarios</h4>
                            <ul>
                                <li><a href="https://goo.gl/maps/3zRajgVwzGTx53sP8">Calle 65 sur #80H 21</a></li>
                                <li><a href="#">Lunes a vierdes de 8am a 8pm</a></li>
                                <li><a href="#">Sabados de 9am a 5pm</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Siguenos</h4>
                            <div className="social-links">
                                <a href="https://www.facebook.com/joyaskogimanufacturas?mibextid=ZbWKwL"><i className="fab fa-facebook-f" /></a>
                                <a href="https://instagram.com/joyaskogi?igshid=MzRlODBiNWFlZA=="><i className="fab fa-twitter" /></a>
                                <a href="https://instagram.com/joyaskogi?igshid=MzRlODBiNWFlZA=="><i className="fab fa-instagram" /></a>
                                <a href="https://wa.me/573223081570"><i className="fab fa-whatsapp" /></a>
                                <a href="https://pin.it/7iUql1a"><i className="fab fa-pinterest" /></a>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="grupo2">
                        <small> © 2023 <b>Joyas Kogi</b> - Todos derechos reservados </small>
                    </div>
                    <style dangerouslySetInnerHTML={{ __html: "\n                .grupo2{\n    padding: 10px 10px;\n    text-align: center;\n    color: #000000;\n    margin-top: 25px;\n}\n\n.grupo2 small{\n    font-size: 15px;\n}\n              " }} />
                </div>
            </footer>

        </div>

    );
}

export default Footer;