import { Link } from "react-router-dom"

export default function NAV() {
    // Función para manejar el clic en un elemento del menú
    // const scrollToSection = (sectionId) => {
    //     const section = document.getElementById(sectionId);
    //     if (section) {
    //         section.scrollIntoView({ behavior: "smooth" });
    //     }
    // };

    return (
        <header>
            <nav className="navbar navbar-expand-lg blur-background navbar-dark sticky-bottom mb-4" >
                <div className="container">
                    <Link to="/"><a className="navbar-brand btn2" href="#" style={{ borderBottom: '2px solid white' }}> <span> Gustavo García</span></a></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse px-6" id="navbarText">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-white">
                            <li className="nav-item">
                                <Link to="/"><a className="nav-link btn2 " aria-current="page" href="#"> <span>Home</span></a></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/sobre-mi"><a className="nav-link btn2" aria-current="page" href="#"  > <span>Sobre mí</span></a></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/proyectos"><a className="nav-link btn2" href="#"><span>Proyectos</span></a></Link> 
                            </li>
                            <li className="nav-item">
                               <Link to="/skill"><a className="nav-link btn2" href="#" > <span>Tecnologías</span> </a></Link> 
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
