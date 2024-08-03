import React from 'react'
import './Mensaje.css'


export const Mensaje = ({ mensajeInfo }) => {
    const { author, text, estado, day, hour } = mensajeInfo
    return (
        <div className= {`container-chat ${author === "yo" && "right1"} `}>
            <div className={`chats ${author === "yo" && "right2"}`}>
                    <span className='author'>{author}</span>
                    <p className='text'>{text}</p>
                <div className='info'>
                    <span className='time-since'>{day} {hour}</span>
                    <div className='status-container'>
                    <span > {estado === "visto" && <i className="bi bi-check2-all"></i>}{estado === "entregado" && <i className="bi bi-check2"></i>}</span>
                    </div>
                </div>
            </div> 
        </div> 
    )
}




