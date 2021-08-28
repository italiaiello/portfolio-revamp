import React from 'react'
import MassShootings from '../../../assets/images/mass-shootings.png'
import D3Icon from '../../../assets/icons/technical-icons/d3.svg'
import GitHubIcon from '../../../assets/icons/technical-icons/github.svg'
import ReactIcon from '../../../assets/icons/technical-icons/react.svg'


const MassShootingsUS = ({ largePulse, smallPulse, showLargeOrSmall }) => {

    const openGitHubRepo = () => window.open('https://github.com/italiaiello/info-vis', '_blank')
    const openDemoPage = () => window.open('https://italiaiello.github.io/info-vis/', '_blank')

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
                    <p>
                        This was a project I worked on for a uni group assignment. Our brief was to find any dataset and display this data in an engaging way through a range of interactive graphs made with JavaScript. We utilised a dataset comprising all the Mass Shootings in the U.S. over the past 52 years, dating back from 2016.
                        <br/><br/>
                        To make these graphs, we used D3.js as it provided the most freedom for customisation. Moreover, we paired it with React to make use of state, which made implementing the graph interactions easier. We followed many YouTube tutorials from a channel called <a href="https://www.youtube.com/watch?v=9uEmNgHzPhQ&list=PLDZ4p-ENjbiPo4WH7KdHjh_EMI7Ic8b2B" target="_blank" rel="noreferrer" className="hyperlink">The Muratorium</a>, which gave us the confidence to implement some complex interactions, such as with the GeoMap depicted in the image.
                        <br/><br/>
                        This was the first time I was able to use React for a real project, and it was so amazing to finally put my new skills to good use.

                    </p>
                    <div className="project__summary--desc__btn-container">
                        <button className="btn" onClick={openDemoPage}>Try It Out</button>
                        <button className="btn" onClick={openGitHubRepo}>See Code on GitHub</button>
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
