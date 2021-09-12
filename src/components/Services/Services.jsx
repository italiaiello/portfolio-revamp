import React from 'react'
import Netlify from '../../assets/icons/technical-icons/netlify.svg'
import Heroku from '../../assets/icons/technical-icons/heroku.svg'
import GitHub from '../../assets/icons/technical-icons/github.svg'
import './Services.scss'

const Services = () => {
    return (
        <section className="services section center-column">
            <h2 className="section-heading">Services I Use</h2>
            <article className="services__all-logos center-row">
                <article className="services__all-logos--logo-container center-column">
                    <figure className="services__all-logos--logo-container__logo center-row">
                        <img src={Netlify} alt="Netlify" />
                    </figure>
                    <p>Netlify</p>
                </article>
                <article className="services__all-logos--logo-container center-column">
                    <figure className="services__all-logos--logo-container__logo center-row">
                        <img src={GitHub} alt="GitHub" />
                    </figure>
                    <p>GitHub</p>
                </article>
                <article className="services__all-logos--logo-container center-column">
                    <figure className="services__all-logos--logo-container__logo center-row">
                        <img src={Heroku} alt="Heroku" />
                    </figure>
                    <p>Heroku</p>
                </article>
            </article>
        </section>
    )
}

export default Services
