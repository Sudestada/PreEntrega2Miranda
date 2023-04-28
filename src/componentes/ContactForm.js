
import React from 'react'
import { useState } from 'react'
import './contactForm.css';

const ContactForm = ({onConfirm}) => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = (e) => {
      e.preventDefault();  
      const userData = {
          name, phone, email
      }

      
      onConfirm(userData)
  }

  return (
    
    <form onSubmit={handleSubmit} className='form'>
        <input type='text' className='' value={name} onChange={(e)=> setName(e.target.value)} placeholder='Ingrese su Nombre' required/>
        <input type='tel' className='' value={phone} onChange={(e)=> setPhone(e.target.value)} placeholder='Ingrese su Nro Telefono' required/>
        <input type='email' className='' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Ingrese su e-mail' required/>
        <button type='submit' className='genOrd'>Generar Orden</button>
    </form>
  )
}

export default ContactForm;
