import 'animate.css/animate.min.css';
import programer from "../images/Hand coding-bro.svg"
export default function SobreMi() {
    return (
        <div id="sobre-mi" className="container my-5 p-4 bg-dark rounded shadow-sm animate__animated animate__fadeIn">
    <div className="container d-flex flex-column text-white-50">
        <h2 className="text-center mb-4 text-white title fs-1 animate__animated animate__rubberBand animate__delay-1s">Sobre mí</h2>

        <div className="row">
            <div className="col-md-8 order-md-1 order-2"> {/* Orden de las columnas para dispositivos grandes y medianos */}
                <div className="about overflow-hidden">
                    <p className="animate__animated animate__fadeInRight">¡Hola! Soy <span className="text-warning">Gustavo García</span>, un apasionado desarrollador frontend. Mi enfoque en la excelencia y la innovación me impulsa constantemente a buscar nuevos desafíos y a superarlos con creatividad y determinación.</p>

                    <p className="animate__animated animate__fadeInRight">Mi habilidad para trabajar en equipo y comunicarme eficazmente me ha permitido integrarme fácilmente en entornos colaborativos y alcanzar objetivos ambiciosos. Estoy emocionado por la posibilidad de seguir creciendo profesionalmente y contribuir al éxito de proyectos innovadores. Siempre estoy abierto a nuevas oportunidades y desafíos que me permitan poner en práctica mi creatividad y experiencia.</p>

                    <p className="animate__animated animate__fadeInRight">¡Gracias por visitar mi portafolio! Estoy deseando conocerte y explorar cómo podemos colaborar juntos en emocionantes proyectos futuros.</p>
                </div>
            </div>

            <div className="d-flex justify-content-center col-md-4 order-md-2 order-1 "> {/* Orden de las columnas para dispositivos grandes y medianos */}
                <div className="image-container">
                    <img className="floating-image" src={programer} alt="Programador"></img>
                </div>
            </div>
        </div>
    </div>
</div>

    );
}
