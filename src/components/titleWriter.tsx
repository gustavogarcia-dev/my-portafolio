import Typewriter from 'typewriter-effect';

export default function TitleWriter({ texto, texto2}){

    return (
        <div className="">
            <Typewriter
            onInit={typewriter => {
                typewriter
                .typeString(texto)
                .pauseFor(2500)
                .deleteAll()
                .typeString(texto2)
                .start();
            }}
            />

          
        </div>
    )
}