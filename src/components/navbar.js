

const Mynavbar = () => {
    return(
        <div className="barraSuperior">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <h3 className="menu">Área do Aluno</h3>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">Cadastrar Aluno</a>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
      
    );
}

export default Mynavbar;