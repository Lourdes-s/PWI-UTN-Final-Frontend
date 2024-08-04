import React from 'react'
import { Link } from 'react-router-dom'
import './Contacts.css'

const Contacts = ({contactos, estaCargando}) => {

    return (
        <div className='contacts-container'>
            {
                estaCargando
                ?<div className="wrapper">
                <div className="loader">
                    <div className="loading one"></div>
                    <div className="loading two"></div>
                    <div className="loading three"></div>
                    <div className="loading four"></div>
                </div>
                </div>
                :contactos.map(contact =>{
                    return(
                        <Link className='contact-list' to = {'/chat/' + contact.id} key={contact.id}>
                            <img className='profile-pic-contacts' src= {contact.thumbnail} alt='foto de perfil' />
                            <div className='text-contacts'>
                                <span className='contact-name'>{contact.nombre} {contact.apellido}</span>
                                <p className='contact-mensaje-text'> {contact.mensajes[0].text}</p>
                                <span className='contact-time'>{contact.mensajes[0].hour}</span>
                            </div>
                        </Link>
                    )
                })
            }
            
        </div>
    )
}

export default Contacts