import React from 'react'
import Soccer from '../../assets/icons/soccer.svg'
import Education from '../../assets/icons/education.svg'
import Book from '../../assets/icons/book.svg'
import './AboutMe.scss'

const AboutMe = () => {
    return (
        <section className="about-me center-column">
            <h2 className="section-heading">About Me</h2>
            <article className="about-me__info center-row">
                <article className="about-me__info--icon-container center-column">
                    <figure className="about-me__info--icon-container__icon">
                        <img src={Soccer} alt="Soccer ball" className="responsive-img" />
                    </figure>
                    <p>Soccer Player</p>
                </article>
                <article className="about-me__info--icon-container center-column">
                    <figure className="about-me__info--icon-container__icon">
                        <img src={Education} alt="Graduation hat" className="responsive-img" />
                    </figure>
                    <p>Studied Design Computing</p>
                </article>
                <article className="about-me__info--icon-container center-column">
                    <figure className="about-me__info--icon-container__icon">
                        <img src={Book} alt="Open book" className="responsive-img" />
                    </figure>
                    <p>Love a Good Read</p>
                </article>

            </article>
        </section>
    )
}

export default AboutMe
