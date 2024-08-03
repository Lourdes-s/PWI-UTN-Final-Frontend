import React, { useState} from 'react'
import { useParams } from 'react-router-dom'
import { ChatHeaderInfo, ListaMensajes, MensajeForm } from '../../Components/Chat'
import '../Screens.css'
import { MOOK_CONTACTOS } from '../Mook'


const ChatScreen = () => {
    const {contactId} = useParams()
    const contact = MOOK_CONTACTOS.find(contact => contact.id === Number(contactId)) 
    const[newMessageInfo, setNewMessageInfo] = useState (contact.mensajes)
    
    const handleSubmitNewMessage = (e) => {
        e.preventDefault()
        const newMessage = {
            author: 'yo',
            text: e.target.mensaje.value,
            estado: 'visto',
            day: 'hoy',
            hour: '06:07',
            id: '7'
        }
        setNewMessageInfo([...newMessageInfo, newMessage])
    }
    return (
        <div style={{height:'100%'}}>
            <ChatHeaderInfo contact={contact}/>
            <ListaMensajes mensajesChat={newMessageInfo}/>
            <MensajeForm handleSubmitNewMessage={handleSubmitNewMessage}/>
        </div>
    )
}

export default ChatScreen