import React, { useEffect, useState } from 'react'
import Contacts from '../../Components/Contact/Contacts/Contacts'
import ContactsHeader from '../../Components/Contact/ContactsHeader/ContactsHeader'
import '../Screens.css'
import { obtenerContactos } from '../../Fetching/contacts.fetching'


const ContactScreen = () => {
    
    const [listaContactos, setListaContactos] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(
        () =>{
            setTimeout(
                () => {
                    obtenerContactos()
            .then(
                (contactos) => {
                    setListaContactos(contactos)
                    setIsLoading(false)
                }
            )
                },
                2000
            )
            
        },
        []
    )

    return (
        <div style={{height:'100%'}}>
            <ContactsHeader setListaContactos={(contactos) => setListaContactos(contactos)}/>
            <Contacts contactos={listaContactos} estaCargando={isLoading}/>
        </div>
    )
}

export default ContactScreen