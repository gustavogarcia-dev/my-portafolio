

export default function Skill(){


    return(
        <div id="skill" className="container p-4 bg-dark text-white rounded shadow-sm mt-5 animate__animated animate__fadeIn">
        
            <h2 className="text-center text-white mb-4 title fs-1 animate__animated animate__rubberBand animate__delay-1s">Tecnologías Que Manejo</h2>
            
            <div className="container overflow-hidden py-4 d-flex flex-wrap justify-content-center tecnologias">

                
                <div className="html5-icon p-2 ">
                    <i className='bx bxl-html5  animate__animated animate__bounceInRight ' ></i>
                    <p className="text-3xl text-center ">HTML5</p>
                </div>
                <div className="css3-icon p-2 ">
                    <i className='bx bxl-css3 animate__animated animate__bounceInRight '  ></i>
                    <p className="text-3xl text-center">CSS3</p>
                </div>
                <div className="react-icon p-2 ">
                    <i className='bx bxl-react animate__animated animate__bounceInRight' ></i>
                    <p className="text-3xl text-center">React</p>

                </div>
                <div className="sass-icon p-2 ">
                    <i className='bx bxl-sass animate__animated animate__bounceInRight' ></i>
                    <p className="text-3xl text-center">Sass</p>

                </div>
                <div className="less-icon p-2 ">
                    <i className='bx bxl-less animate__animated animate__bounceInRight' ></i>
                    <p className="text-3xl text-center">Less</p>

                </div>
                <div className="tailwind-icon p-2 ">
                    <i className='bx bxl-tailwind-css animate__animated animate__bounceInRight' ></i>
                    <p className="text-3xl text-center">TailwindCss</p>

                </div>
                <div className="bootstrap-icon p-2 ">
                    <i className='bx bxl-bootstrap animate__animated animate__bounceInRight' ></i>
                    <p className="text-3xl text-center">Bootstrap</p>

                </div>
                <div className="git-icon p-2 ">
                    <i className='bx bxl-git animate__animated animate__bounceInRight' ></i>
                    <p className="text-3xl text-center">Git</p>

                </div>
                <div className="typescript-icon p-2 ">
                    <i className='bx bxl-typescript animate__animated animate__bounceInRight' ></i>
                    <p className="text-3xl text-center">TypeScipt</p>

                </div>
                <div className="javascript-icon p-2 ">
                    <i className='bx bxl-javascript animate__animated animate__bounceInRight' ></i>
                    <p className="text-3xl text-center">JavaScript</p>

                </div>
                <div className="redux-icon p-2 ">
                    <i className='bx bxl-redux animate__animated animate__bounceInRight'></i>
                    <p className="text-3xl text-center">Redux</p>

                </div>
            </div>
    </div>
    )
}