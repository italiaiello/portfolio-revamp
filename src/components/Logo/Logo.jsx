import React from 'react'
import Icon from '../../assets/icons/logo.svg'

const Logo = () => {
    return (
        <article className="logo-section section center-row">
            <figure className="logo-section__logo">
                <img src={Icon} alt="Andrew Aiello logo" />
            </figure>
        </article>
    )
}

export default Logo
