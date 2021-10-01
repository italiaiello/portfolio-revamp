import React from 'react'
import LargePulse from '../../assets/pulses/large-pulse.png'
import SmallPulse from '../../assets/pulses/small-pulse.png'
import "./Resume.scss"

const Resume = ({ showLargeOrSmall }) => {
    return (
        <section className="resume center-row">
            <article className="resume__title-and-btn center-column">
                <h2 className="resume__title-and-btn--title">Want to see my experience?</h2>
                <a href="https://drive.google.com/file/d/1YJ-Gfw03eabUtAGAm73QFPpiE_SG6gGe/view?usp=sharing" target="_blank" rel="noreferrer" className="btn resume__title-and-btn--mail-btn">Check out my resume</a>
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
