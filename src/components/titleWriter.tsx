import Typewriter from 'typewriter-effect';

interface TitleWriterProps {
    texto: string;
    texto2: string;
  }
export default function TitleWriter({texto, texto2}:TitleWriterProps){

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