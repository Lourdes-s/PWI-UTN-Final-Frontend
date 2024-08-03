import React from 'react'
import { ChatScreen, ContactScreen, ProfileInfoScreen, } from './Screens'
import { Route, Routes } from 'react-router-dom'


function App() {
    return (
        <div className='phone'>
            <Routes>
                <Route path='/' element={<ContactScreen/>}/>
                <Route path='/chat/:contactId' element={<ChatScreen/>}/>
                <Route path='/perfilinfo/:contactId' element={<ProfileInfoScreen/>}/>
            </Routes>
        </div>
    )
}

export default App
