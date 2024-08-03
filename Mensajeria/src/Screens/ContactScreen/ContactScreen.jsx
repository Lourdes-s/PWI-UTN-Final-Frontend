import React from 'react'
import Contacts from '../../Components/Contact/Contacts/Contacts'
import ContactsHeader from '../../Components/Contact/ContactsHeader/ContactsHeader'
import '../Screens.css'


const ContactScreen = () => {
    return (
        <div style={{height:'100%'}}>
            <ContactsHeader/>
            <Contacts/>
        </div>
    )
}

export default ContactScreen