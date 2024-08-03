import React from 'react'
import InfoPerfil from '../../Components/InfoPerfil/InfoPerfil'
import '../Screens.css'
import { useParams } from 'react-router-dom'
import { MOOK_CONTACTOS } from '../Mook'

const ProfileInfoScreen = () => {

    const { contactId } = useParams()
    const contact = MOOK_CONTACTOS.find((contacto)=> Number(contactId) === contacto.id)
    console.log(contact)
    return (
        <div style={{ height: '100%' }}>
            <InfoPerfil contact={contact} />
        </div>
    )
}

export default ProfileInfoScreen