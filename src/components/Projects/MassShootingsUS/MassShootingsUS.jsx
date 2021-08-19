import React from 'react'
import MassShootings from '../../../assets/images/mass-shootings.png'
import D3Icon from '../../../assets/icons/technical-icons/d3.svg'
import GitHubIcon from '../../../assets/icons/technical-icons/github.svg'
import ReactIcon from '../../../assets/icons/technical-icons/react.svg'


const MassShootingsUS = ({ largePulse, smallPulse, showLargeOrSmall }) => {

    return (
        <section className="project center-column">
            <article className="project__summary center-row">
                {
                    showLargeOrSmall === 'large' ?
                    <figure className="project__summary--large-pulse">
                        <img src={largePulse} className="responsive-img" alt="Large pulse"/>
                    </figure>
                    :
                    <figure className="project__summary--small-pulse">
                        <img src={smallPulse} className="responsive-img" alt="Small pulse"/>
                    </figure>
                }
                <article className="project__summary--desc">
                    <h3 className="project__summary--desc__title">Mass Shootings U.S.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat ex ac gravida blandit. Nunc quis neque purus. Morbi 
                        tincidunt magna laoreet, porta magna non, ultrices justo. Donec id dui massa. Nam blandit vestibulum vehicula. Sed et neque 
                        nec ipsum pellentesque interdum quis sollicitudin tortor. Donec porta et erat nec faucibus. Nullam auctor, urna non malesuada 
                        consequat, augue urna egestas massa, ut porttitor lorem risus et justo. Maecenas sit amet nunc at ante convallis dictum eu sed 
                        sapien. Phasellus magna neque, varius non sollicitudin et, rutrum vel quam.
                    </p>
                    <div className="project__summary--desc__btn-container">
                        <button className="btn">Try It Out</button>
                        <button className="btn">See Code on GitHub</button>
                    </div>
                </article>
                <article className="project__summary--fig-container center-column">
                    <figure className="project__summary--fig-container__fig">
                        <img src={MassShootings} alt="Mass Shootings U.S. Project" className="responsive-img" />
                    </figure>
                    <article className="project__summary--fig-container__technical-logos">
                        <figure className="project__summary--fig-container__technical-logos--logo">
                            <img src={D3Icon} alt="D3" className="responsive-img" />
                        </figure>
                        <figure className="project__summary--fig-container__technical-logos--logo">
                            <img src={GitHubIcon} alt="GitHub" className="responsive-img" />
                        </figure>
                        <figure className="project__summary--fig-container__technical-logos--logo">
                            <img src={ReactIcon} alt="React" className="responsive-img" />
                        </figure>
                    </article>
                </article>
            </article>
        </section>
    )
}

export default MassShootingsUS
