import './portfolio.css'
import { FaReact } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import portfolio from '../../assets/img-port.png'
import portfolio2 from '../../assets/port-img2.png'
import portfolio3 from '../../assets/img-port3.png'
import portfolio4 from '../../assets/img-port4.png'
import { Link } from 'react-router-dom'



function Portfolio() {
    return (
        <div className='portfolio'>
            <div className='img-portfolios'>
                <Link to='https://projeto-loja-theta.vercel.app/' target='_blank'>
                <div className='img-port' style={{ backgroundImage: `url(${portfolio})` }}>
                    <div className='img-overlay'>
                        <div className='overlay-col'>
                            <FaReact />
                            <button>Acesse <FaGithub /> </button>
                        </div>
                    </div>
                </div>
                </Link>
                <Link to='https://barber-shop-mu-eight.vercel.app/' target='_blank'>
                <div className='img-port' style={{ backgroundImage: `url(${portfolio3})` }}>
                <div className='img-overlay'>
                        <div className='overlay-col'>
                            <IoLogoJavascript color='yellow' />
                            <button style={{color:'#B8860B'}}>Acesse <FaGithub /> </button>
                        </div>
                </div>
                </div>
                </Link>
                <Link to='https://projeto-escola-psi.vercel.app/' target='_blank'>
                <div className='img-port' style={{ backgroundImage: `url(${portfolio2})` }}>
                <div className='img-overlay'>
                        <div className='overlay-col'>
                            <FaReact />
                            <button>Acesse <FaGithub /> </button>
                        </div>
                </div>
                </div>
                </Link>
                <Link to='https://pensebem.vercel.app/' target='_blank'>
                <div className='img-port' style={{ backgroundImage: `url(${portfolio4})` }}>
                <div className='img-overlay'>
                        <div className='overlay-col'>
                            <IoLogoJavascript color='yellow' />
                            <button style={{color:'#B8860B'}}>Acesse <FaGithub /> </button>
                        </div>
                </div>
                </div>
                </Link>
            </div>
            <Link to='https://github.com/VitorDiniz1' target='_blank'>
                <button className='btn'>Ver mais</button>
            </Link>
        </div>
    )
}

export default Portfolio