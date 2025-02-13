

import './contact.css'


import { MdOutlineMail } from "react-icons/md"
import { FaPhoneVolume } from "react-icons/fa"
import { useState } from 'react'
import { toast } from 'react-toastify'
import { CiLinkedin } from "react-icons/ci"
import { FaGithub } from "react-icons/fa"
import { Link } from 'react-router-dom'

function Contact(){
    const [result, setResult] =useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1a6f98bd-d929-4ef1-95ce-ba724540f26a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  }

   

    return(
        <div className="contact">
            <div className='contact-col'>
            <h3>Me envie uma mensagem <MdOutlineMail /></h3>
                <p>Entre em contato comigo via <b>e-mail</b>, <b>telefone</b>, <b>pelo formulário</b> ou <b>pelas redes sociais</b> para discutir mais detalhes, esclarecer dúvidas ou fornecer informações adicionais. Atenciosamente, Vitor Diniz.
                </p>
                <ul>
                  <Link  to='https://www.linkedin.com/in/vitordiniz1/' target= '_blank'>
                    <li className='link-linkedin'>
                      <CiLinkedin color='#0A66C2' size={30} />
                      https://www.linkedin.com/in/vitordiniz1/
                    </li>
                  </Link>

                  <Link to='https://github.com/VitorDiniz1' target= '_blank'>
                    <li className='link-github'>
                      <FaGithub color='black' size={30} />
                      https://github.com/VitorDiniz1</li>
                  </Link>
                    <li className='link-email'> <MdOutlineMail color='red' size={30} />vitordiniz2706@gmail.com</li>
                    <li className='link-phone'><FaPhoneVolume color='green' size={30} />+55 (21) 99805-5374</li>
                </ul>
            </div>

            <div className='contact-col'>
            <form onSubmit={onSubmit}>
                    <label>Seu nome</label>
                    <input type='text' name='name' placeholder='Escreva seu nome' required />
                    <label>Seu e-mail</label>
                    <input type='email' name='email' placeholder='Escreva seu e-mail' required />
                    <label>Escreva sua mensagem</label>
                    <textarea name='message'rows='6' placeholder='Escreva uma mensagem' required ></textarea>
                    <button type='submit' className='btn' >Enviar</button>
                </form>
                <span>{result}</span>

            </div>

        </div>
    )
}

export default Contact