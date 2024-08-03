import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Contacts.css'
import { obtenerContactos } from '../../../Fetching/contacts.fetching'

const Contacts = () => {

    useEffect(
        () =>{
            setTimeout(
                () => {
                    obtenerContactos()
            .then(
                (contacts) => {
                    console.log('contactos', contacts)
                    setListaContactos(contacts)
                    setIsLoading(false)
                }
            )
                },
                2000
            )
            
        },
        []
    )


    const [listaContactos, setListaContactos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    

    return (
        <div className='contacts-container'>
            {
                isLoading
                ?<div className="wrapper">
                <div className="loader">
                    <div className="loading one"></div>
                    <div className="loading two"></div>
                    <div className="loading three"></div>
                    <div className="loading four"></div>
                </div>
                </div>
                :listaContactos.map(contact =>{
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