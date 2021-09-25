import React from 'react'
import HeaderPulse from '../../assets/pulses/header-pulse.png'
import MobileHeaderPulse from '../../assets/pulses/mobile-header-pulse.png'
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
                <h1 className="header__intro--name">I'm Andrew Aiello</h1>
                <p className="header__intro--desc">And I'm passionate about expressing my creativity with code</p>
                <article className="header__intro--btn-container center-row">
                    <button className="btn header__intro--btn">GitHub</button>
                    <button className="btn header__intro--btn">LinkedIn</button>
                </article>
            </article>
        </section>
    )
}

export default Header
