
import { useState } from 'react'
import avatar from '../../assets/avatar.png'
import './header.css'
import { Link } from 'react-scroll'


import { IoReorderThreeOutline } from "react-icons/io5"

function Header(){

    const [mobileMenu,setMobileMenu] = useState(false)

    function toogleMenu(){
        mobileMenu ? setMobileMenu(false) :setMobileMenu(true)
    }

    return(
        <nav className='container'>
            <img src={avatar}/>
            <ul className={mobileMenu?'':'hide-mobile-menu'}>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='about' smooth={true} offset={-260} duration={500}>About</Link></li>
                <li><Link to='portfolio' smooth={true} offset={-260} duration={500}>Portfólio</Link></li>
                <li><Link to='skills' smooth={true} offset={-260} duration={500}>Skills</Link></li>
                <li><Link className='btn' to='contact' smooth={true} offset={-260} duration={500}>Contact</Link></li>
            </ul>

            <IoReorderThreeOutline size={40} onClick={toogleMenu} className='menu-icon' />

        </nav>
    )
}

export default Header