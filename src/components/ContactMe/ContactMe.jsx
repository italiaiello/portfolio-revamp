import React from 'react'
import LargePulse from '../../assets/pulses/large-pulse.png'
import SmallPulse from '../../assets/pulses/small-pulse.png'
import './ContactMe.scss'

const ContactMe = ({ showLargeOrSmall }) => {
    return (
        <section className="contact-me center-row">
            <article className="contact-me__title-and-btn center-column">
                <h2 className="contact-me__title-and-btn--title">Have any questions?</h2>
                <a href="mailto:andrewaiello7@gmail.com" className="btn contact-me__title-and-btn--mail-btn">Send me an email</a>
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
