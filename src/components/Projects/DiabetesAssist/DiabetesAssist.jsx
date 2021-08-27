import React from 'react'
import DiabetesAssistImage from '../../../assets/images/diabetes-assist.png'
import D3Icon from '../../../assets/icons/technical-icons/d3.svg'
import GitHubIcon from '../../../assets/icons/technical-icons/github.svg'
import ReactIcon from '../../../assets/icons/technical-icons/react.svg'


const DiabetesAssist = ({ largePulse, smallPulse, showLargeOrSmall }) => {

    const openGitHubRepo = () => window.open('https://github.com/italiaiello/diabetes-assist', '_blank')
    const openDemoPage = () => window.open('https://italiaiello.github.io/diabetes-assist/', '_blank')

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
                <article className="project__summary--fig-container center-column">
                    <figure className="project__summary--fig-container__fig">
                        <img src={DiabetesAssistImage} alt="Diabetes Assist" className="responsive-img" />
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
                <article className="project__summary--desc">
                    <h3 className="project__summary--desc__title">DiabetesAssist</h3>
                    <p>
                    The concept for this project was inspired by a group project I did at uni. We were focussing on creating a solution that would provide individuals with more control over their diabetes.
                    <br/><br/>
                    We were specifically addressing how some people with diabetes saw insulin injections were a last resort, so if they became dependent on these injections, it may make them feel like they have lost control. Thus we tried to come up with a solution that would help return some control back to the individual.
                    <br/><br/>
                    This application acts as a hub for diabetes, providing important information and support all in one place. It allows people to track their blood glucose levels, book appointments with health professionals, and create diabetes-friendly meal plans.

                    </p>
                    <div className="project__summary--desc__btn-container center-row">
                        <button className="btn" onClick={openDemoPage}>Try It Out</button>
                        <button className="btn" onClick={openGitHubRepo}>See Code on GitHub</button>
                    </div>
                </article>
            </article>
        </section>
    )
}

export default DiabetesAssist
