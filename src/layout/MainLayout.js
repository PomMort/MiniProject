import React from 'react'
import Navbar from '../navigation/Navbar'

export default function MainLayout({ children }) {
    return (
        <div>
            <Navbar />
            {children}
            
        </div>
    )
}
