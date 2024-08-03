import React from 'react'
import './headerInfo.css'
import { Link } from 'react-router-dom'


export const ChatHeaderInfo = ({ contact }) => {

    return (
        <div className='header'>
            <div className='contact-container'>
                <Link to={'/'} className='button'><i className="bi bi-arrow-left-short"></i></Link>
                <div className='name-pic'>
                <Link className='photo-link' to = {'/perfilinfo/' + contact.id}><img src={contact.thumbnail} className="profile-picture" alt="foto de perfil" /></Link>
                <h3 className='name'>{contact.nombre}</h3>
                </div>
            </div>
            <div className='header-buttons'>
                <button className='button'><i className="bi bi-telephone"></i></button>
                <button className='button'><i className="bi bi-camera-video"></i></button>
                <button className='button'><i className="bi bi-three-dots-vertical"></i></button>
            </div>
        </div>
    )
}
