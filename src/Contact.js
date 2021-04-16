import React from 'react'
import './Contact.css'

function Contact({ name, image}) {
    return (
        <div className='contact'>
            <img src={image} alt=""/>
            <h4>{name}</h4>
        </div>
    )
}

export default Contact
