import React from 'react'
import Icon from '../../assets/icons/logo.svg'

const Logo = () => {

    const scrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <article className="section center-row">
            <figure className="clickable" onClick={scrollToTop}>
                <img src={Icon} alt="Andrew Aiello logo" />
            </figure>
        </article>
    )
}

export default Logo
