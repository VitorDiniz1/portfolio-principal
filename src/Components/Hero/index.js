import './hero.css'
import { CiLinkedin } from "react-icons/ci"
import { FaGithub } from "react-icons/fa"
import { GrDocumentPdf } from "react-icons/gr"

import { Link } from 'react-router-dom'

function Hero(){
    return(
        <div className='hero container'>
            <div className='container-hero'>
                <div className='typing'>
                    <h1>Olá! Meu nome é Vitor Diniz</h1>
                </div>
                <div className='typing2'>
                    <h3>Seja bem-vindo ao meu portfólio</h3>
                </div>
                <div className='typing3'>
                    <p>Acesse minhas redes sociais ↓</p>
                </div>
                <div className='social-midias'>    
                    <Link  to='https://www.linkedin.com/in/vitordiniz1/' target= '_blank'>
                        <CiLinkedin color='#0A66C2' size={40} />
                    </Link> 
                    <Link to='https://github.com/VitorDiniz1' target= '_blank'>
                        <FaGithub color='black' size={40} />
                    </Link> 
                    <button
                        onClick={() => {
                        const link = document.createElement("a");
                        link.href = "/curriculo-principal.pdf"; // Caminho relativo ao arquivo dentro da pasta public
                        link.download = "curriculo-principal.pdf"; // Nome do arquivo no download
                        link.click();
                        }}
                        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                    <GrDocumentPdf color="#FF0000" size={30} />
                    </button>
                </div> 
            </div>
        </div>
    )
}

export default Hero