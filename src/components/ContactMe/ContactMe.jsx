import React from 'react'
import './ContactMe.scss'

const ContactMe = () => {
    return (
        <section className="contact-me section center-column" >
            <h2>Any questions?</h2>
            <hr className="contact-me__divider" />
            <a href="mailto:andrewaiello7@gmail.com" className="btn contact-me__mail-btn">Send me an email</a>
        </section>
    )
}

export default ContactMe
