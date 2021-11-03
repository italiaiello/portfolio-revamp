import React from 'react'
import Icon from '../../assets/icons/logo.svg'
import GitHubLogo from '../../assets/icons/technical-icons/github-black.svg'
import LinkedIn from '../../assets/icons/technical-icons/linkedin.svg'
import './EndSection.scss'

const Logo = () => {

    const scrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <section className="end-section section center-column">
            <figure className="clickable" onClick={scrollToTop}>
                <img src={Icon} alt="Andrew Aiello logo" />
            </figure>
            <article className="end-section__btn-container center-row">
                <a href="https://github.com/italiaiello" className="btn end-section__btn-container--btn alternate-btn center-row">
                    <figure className="center-row">
                        <img src={GitHubLogo} alt="GitHub" />
                    </figure>
                </a>
                <a href="https://www.linkedin.com/in/andrew-aiello-9aa21417a/" className="btn end-section__btn-container--btn center-row">
                    <figure className="center-row">
                        <img src={LinkedIn} alt="LinkedIn" />
                    </figure>
                </a>
            </article>
        </section>
    )
}

export default Logo
