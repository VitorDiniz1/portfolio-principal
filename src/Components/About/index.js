

import './about.css'

import perfil from '../../assets/foto perfil.jpg'

function About(){
    return(
        <div className="about">
            <div className='about-left'  >
                <img src={perfil}  className='about-img'/>
            </div>

            <div className='about-right'>
                <h1>Vitor Diniz Pereira da Silva</h1>
                <p>👋 Olá! Meu nome é Vitor Diniz Pereira da Silva, mas pode me chamar de Vitor. É um prazer conhecê-lo!</p>
                <p>👨‍💻 Ao longo do último ano, tenho trabalhado em projetos envolvendo JavaScript, React JS, Python e Bancos de dados.</p>
                <p>🎓 Atualmente cursando Sistemas de Informação no Centro Universitário UniLaSalle</p>
            </div>

        </div>
    )
}

export default About