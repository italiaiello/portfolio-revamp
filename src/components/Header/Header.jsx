import React from 'react'
import HeaderPulse from '../../assets/pulses/header-pulse.webp'
import MobileHeaderPulse from '../../assets/pulses/mobile-header-pulse.webp'
import GitHubLogo from '../../assets/icons/technical-icons/github-black.svg'
import LinkedIn from '../../assets/icons/technical-icons/linkedin-white.svg'
import './Header.scss'

const Header = () => {
    return (
        <section className="header">
            <figure className="header__pulse hide-on-mobile">
                <img src={HeaderPulse} className="responsive-img" alt="Header pulse" />
            </figure>
            <figure className="show-on-mobile header__pulse-mobile">
                <img src={MobileHeaderPulse} className="responsive-img" alt="Header pulse" />
            </figure>
            <article className="header__intro center-column">
                <h1 className="header__intro--name">Hi, I'm Andrew</h1>
                <p className="header__intro--desc">And I'm passionate about expressing my creativity with code</p>
                <article className="header__intro--btn-container center-row">
                    <a href="https://github.com/italiaiello" className="btn header__intro--btn center-row">
                        <figure className="center-row">
                            <img src={GitHubLogo} alt="GitHub" />
                        </figure>
                    </a>
                    <a href="https://www.linkedin.com/in/andrew-aiello-9aa21417a/" className="btn header__intro--btn alternate-btn center-row">
                        <figure className="center-row">
                            <img src={LinkedIn} alt="LinkedIn" />
                        </figure>
                    </a>
                </article>
            </article>
        </section>
    )
}

export default Header
