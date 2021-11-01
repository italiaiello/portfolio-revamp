import React from 'react'
import LargePulse from '../../assets/pulses/large-pulse-end-section.webp'
import SmallPulse from '../../assets/pulses/small-pulse-end-section.webp'
import './ContactMe.scss'

const ContactMe = ({ showLargeOrSmall }) => {

    const buttonClass = `contact-me__title-and-btn--mail-btn ${showLargeOrSmall === 'large' ? 'main-btn-orange' : 'main-btn-blue'}`

    return (
        <section className="contact-me center-row">
            <article className="contact-me__title-and-btn center-column">
                <h2 className="contact-me__title-and-btn--title">Have any questions?</h2>
                <a href="mailto:andrewaiello7@gmail.com" className={buttonClass}>Send me an email</a>
            </article>
            {
                showLargeOrSmall === 'large' ?
                <figure className="contact-me__large-pulse">
                    <img src={LargePulse} alt="Contact me" className="responsive-img" />
                </figure>
                :
                <figure className="contact-me__small-pulse">
                    <img src={SmallPulse} alt="Contact me" className="responsive-img" />
                </figure>
            }
            
        </section>
    )
}

export default ContactMe
