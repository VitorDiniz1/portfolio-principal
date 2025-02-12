

import './skills.css'

import { FaReact } from "react-icons/fa"
import { AiOutlineConsoleSql } from "react-icons/ai"
import { FaPython } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { FaHtml5 } from "react-icons/fa"
import { FaCss3Alt } from "react-icons/fa"
import { FaJava } from "react-icons/fa"

import c from '../../assets/letter_c_PNG22.png'
import csharp from '../../assets/csharp.png'
import delphi from '../../assets/delphi.png'

function Skills(){
    return(
        <div className="skills" >
            <span>Techs que uso no dia a dia</span>
            <div className='img-linguagem'>
                <FaReact size={70} color='blue' className='linguagem1'/>
                <img src={csharp} className='linguagem' />
                <FaPython size={70} color='yellow' className='linguagem1'/>
                <IoLogoJavascript size={70} color='yellow' className='linguagem1'/>
                <AiOutlineConsoleSql size={70} color='white' className='linguagem1'/>
                <img src={delphi} className='linguagem' />
                <FaCss3Alt size={70} color='blue' className='linguagem1'/>
                <FaHtml5 size={70} color='red' className='linguagem1'/>
            </div>


            <span>Outras tags que ja realizei projetos</span>
                <div className='img-linguagem'>
                    <img src={c} className='linguagem'/>
                    <FaJava size={70} color='blue' className='linguagem1'/>
                </div> 

        </div>
    )
}

export default Skills