import React from 'react'
import LargePulse from '../../assets/pulses/large-pulse-end-section.png'
import SmallPulse from '../../assets/pulses/small-pulse-end-section.png'

const Resume = ({ showLargeOrSmall }) => {

    const buttonClass = `contact-me__title-and-btn--mail-btn ${showLargeOrSmall === 'large' ? 'contact-me__orange-btn' : 'contact-me__blue-btn'}`

    return (
        <section className="contact-me center-row">
            <article className="contact-me__title-and-btn center-column">
                <h2 className="contact-me__title-and-btn--title">Want to see my experience?</h2>
                <a href="https://drive.google.com/file/d/1fbYWpCKDy-E90auvdWwLsbMCv4LAR4Hm/view?usp=sharing" target="_blank" rel="noreferrer" className={buttonClass}>Check out my resume</a>
            </article>
            {
                showLargeOrSmall === 'large' ?
                <figure className="contact-me__large-pulse">
                    <img src={LargePulse} alt="My experience" className="responsive-img" />
                </figure>
                :
                <figure className="contact-me__small-pulse">
                    <img src={SmallPulse} alt="My experience" className="responsive-img" />
                </figure>
            }
        </section>
    )
}

export default Resume
