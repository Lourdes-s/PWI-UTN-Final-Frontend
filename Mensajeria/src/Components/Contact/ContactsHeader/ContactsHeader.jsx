import React, { useEffect, useState } from 'react'
import './ContactsHeader.css'
import { obtenerContactos } from '../../../Fetching/contacts.fetching';

const ContactsHeader = ({setListaContactos}) => {

    const [searchString, setSearchString] = useState('')

    useEffect(
        () => {
            setTimeout(
                () => {
                    obtenerContactos()
                        .then(
                            (contacts) => {
                                if (searchString) {
                                    const newContactsList = contacts.filter(
                                        contact =>
                                            contact.nombre.toLowerCase().includes(searchString.toLocaleLowerCase())
                                    )
                                    setListaContactos(newContactsList)
                                }
                                else {
                                    setListaContactos(contacts)
                                }
                            }
                        )
                },
                500
            )
        },
        [searchString]
    )

    const handleChangeValue = (e) => {
        setSearchString(e.target.value)
    }

    return (
        <div className='contact-header-container'>
            <div className='contact-header-title'>
                <h2 className='contacts-header-contact'>Contactos</h2>
            </div>
            <input
                className='input-filter'
                placeholder='Buscar contacto'
                onChange={handleChangeValue}
                value={searchString}
            />
        </div>
    );
};

export default ContactsHeader

