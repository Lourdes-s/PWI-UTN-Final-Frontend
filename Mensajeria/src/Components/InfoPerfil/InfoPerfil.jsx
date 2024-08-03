import React from 'react'
import { Link } from 'react-router-dom';
import { LiaPhoneSolid } from "react-icons/lia";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import './InfoPerfil.css'


const InfoPerfil = ({ contact }) => {

    return (
            <div className='info-profile-container'>
                <div className='info-profile-volver'>
                    <Link to={'/chat/' + contact.id}><i className="bi bi-arrow-left-short"></i></Link>
                </div>
                <div className='info-contact-main'>
                    <img className='profile-pic-info' src={contact.thumbnail} alt="Foto de perfil" />
                    <h2 className='profile-info-name'>{contact.nombre} {contact.apellido}</h2>
                    <span className='profile-info-phone'>{contact.telefono}</span>
                    <span className='profile-info-1'>{contact.estado}</span>
                    <span className='profile-info-2'>{contact.estado_contacto}</span>
                </div>
                <div className='info-profile-call'>
                <span className='info-profile-call-icon'><LiaPhoneSolid /></span>
                <span className='info-profile-call-text'>Llamar</span>
                </div>
                <div className='info-contact-secondary'>
                <span className='info-contact-description'><HiOutlineChatBubbleBottomCenterText /> {contact.descripcion}</span>
                    <span className='info-contact-email'><HiOutlineMail /> {contact.email}</span>
                    <span className='info-contact-address'><HiOutlineLocationMarker /> {contact.direccion}</span>
                </div>
            </div> 
        )
}

export default InfoPerfil

