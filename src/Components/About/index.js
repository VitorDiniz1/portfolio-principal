

import './about.css'

import perfil from '../../assets/foto perfil.jpg'

function About(){
    return(
        <div className="about">
            <div className='about-left'  >
                <img src={perfil}  className='about-img'/>
            </div>

            <div className='about-right'>
               <h1>Desenvolvedor Full Stack</h1>
               <p>👋 Olá! Meu nome é Vitor Diniz Pereira da Silva,mas pode me chamar de Vitor. Sou um desenvolvedor Full Stack apaixonado por tecnologia e inovação. Tenho experiência no desenvolvimento de sistemas web
                 e desktop,atuando tanto no front-end quanto no back-end. Atualmente, trabalho com Delphi, criando soluções eficientes e escaláveis.
               </p>
                <p>👨‍💻 Nos últimos anos, estive envolvido em projetos com Python, C#, .NET e React.js, sempre buscando expandir meu conhecimento e habilidades.</p>
                <p>🎓 Estou atualmente cursando Sistemas de Informação no Centro Universitário UniLaSalle, com previsão de formatura em 2026.</p>
            </div>

        </div>
    )
}

export default About