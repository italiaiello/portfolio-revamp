import React from 'react'
import MassShootings from '../../../assets/images/mass-shootings.png'
import D3Icon from '../../../assets/icons/technical-icons/d3.svg'
import GitHubIcon from '../../../assets/icons/technical-icons/github.svg'
import ReactIcon from '../../../assets/icons/technical-icons/react.svg'


const MassShootingsUS = ({ largePulse, smallPulse, showLargeOrSmall }) => {

    return (
        <section className="project center-column">
            <article className="project__summary center-row mobile-reverse-col">
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
                    <p>
                        This was a project I worked on for a uni group assignment. Our brief was to find any dataset and display this data in an engaging way through a range of interactive graphs made with JavaScript. We utilised a dataset comprising all the Mass Shootings in the U.S. over the past 52 years, dating back from 2016.
                        <br/><br/>
                        To make these graphs, we used D3.js as it provided the most freedom for customisation. Moreover, we paired it with React to make use of state, which made implementing the graph interactions easier. We followed many YouTube tutorials from a channel called The Muratorium, which gave us the confidence to implement some complex interactions, such as with the GeoMap depicted in the image.
                        <br/><br/>
                        This was the first time I was able to use React for a real project, and it was so amazing to finally put my new skills to good use.

                    </p>
                    <div className="project__summary--desc__btn-container center-row">
                        <a href="https://italiaiello.github.io/info-vis/" target="_blank" rel="noreferrer" className="btn">Try It Out</a>
                        <a href="https://github.com/italiaiello/info-vis" target="_blank" rel="noreferrer" className="btn">See Code on GitHub</a>
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
