import React from "react";

function Header() {
    return (
      <div>
  <header>
    <div className="container">
      <nav className="nav">
        <div className="menu-toggle">
          <i className="fas fa-bars" />
          <i className="fas fa-times" />
        </div>
        <a href="Index.html" className="logo">JOYASKOGI</a>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="Index.html" className="nav-link active">Inicio</a>
          </li>
          <li className="nav-item">
            <a href="Colecciones.html" className="nav-link ">Colecciones</a>
          </li>
          <li className="nav-item">
            <a href="Galeria.html" className="nav-link ">Galeria</a>
          </li>
          <li className="nav-item">
            <a href="Cuidado.html" className="nav-link ">Cuidado</a>
          </li>
          <li className="nav-item">
            <a href="Nosotros.html" className="nav-link ">Nosotros</a>
          </li>
          <li className="nav-item">
            <a href="Sesión.html" className="nav-link ">Iniciar sesión</a>
          </li>
          <li className="nav-item">
            <a href="Contactanos.html" className="nav-link ">Contactanos</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <section className="hero" id="hero">
    <div className="container">
      <h2 className="h2-sub">
        <span className="fil">B</span>ienvenido
      </h2>
      <h1 className="head">Joyeria Kogi</h1>
      <div className="he-des">
        <h5>Expertos artesanos en diseño, desarrollo y produccion de accesorios de joyeria</h5>
        <a href="Nosotros.html" className="btn cta-btn">Explora</a>
      </div>
    </div>
  </section>

</div>

        

    );
}

export default Header;