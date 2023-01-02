import React from 'react'
import DiabetesAssistImage from '../../../assets/images/diabetes-assist.webp'
import FigmaIcon from '../../../assets/icons/technical-icons/figma.svg'
import ReactIcon from '../../../assets/icons/technical-icons/react.svg'
import NetlifyIcon from '../../../assets/icons/technical-icons/netlify.svg'
import FirebaseIcon from '../../../assets/icons/technical-icons/firebase.png'
import LargePulse from '../../../assets/pulses/large-pulse.webp'
import SmallPulse from '../../../assets/pulses/small-pulse.webp'


const DiabetesAssist = ({ showLargeOrSmall, mainBtnClasses, alternateBtnClasses }) => {

    return (
        <section className="project center-column">
            <article className="project__summary center-row">
                {
                    showLargeOrSmall === 'large' ?
                    <figure className="project__summary--large-pulse">
                        <img src={LargePulse} className="responsive-img" alt="Large pulse"/>
                    </figure>
                    :
                    <figure className="project__summary--small-pulse">
                        <img src={SmallPulse} className="responsive-img" alt="Small pulse"/>
                    </figure>
                }
                <article className="project__summary--details center-row">
                    <article className="project__summary--details__fig-and-icons center-column">
                        <figure className="project__summary--details__fig-and-icons--fig">
                            <img src={DiabetesAssistImage} alt="Diabetes Assist" className="responsive-img" />
                        </figure>
                        <article className="project__summary--details__fig-and-icons--icons">
                            <figure className="project__summary--details__fig-and-icons--icons__icon center-row" title="React">
                                <img src={ReactIcon} alt="React" className="responsive-img" />
                            </figure>
                            <figure className="project__summary--details__fig-and-icons--icons__icon center-row" title="Heroku">
                                <img src={NetlifyIcon} alt="Heroku" className="responsive-img" />
                            </figure>
                            <figure className="project__summary--details__fig-and-icons--icons__icon center-row" title="Figma">
                                <img src={FigmaIcon} alt="Figma" className="responsive-img" />
                            </figure>
                            <figure className="project__summary--details__fig-and-icons--icons__icon center-row" title="GitHub">
                                <img src={FirebaseIcon} alt="GitHub" className="responsive-img" />
                            </figure>
                        </article>
                    </article>
                    <article className="project__summary--details__desc">
                        <h3 className="project__summary--details__desc--title">DiabetesAssist</h3>
                        <p>
                            The concept for this project was inspired by a group project I did at uni. We were focussing on creating a solution that would provide individuals with more control over their diabetes.
                            <br/><br/>
                            We were specifically addressing how some people with diabetes saw insulin injections were a last resort, so if they became dependent on these injections, it may make them feel like they have lost control. Thus we tried to come up with a solution that would help return some control back to the individual.
                            <br/><br/>
                            This application acts as a hub for diabetes, providing important information and support all in one place. It allows people to track their blood glucose levels, book appointments with health professionals, and create diabetes-friendly meal plans.
                        </p>
                        <div className="test-credentials">
                            <h4>Test Credentials</h4>
                            <p>
                                Email: kenfoley@gmail.com<br />
                                Password: test123
                            </p>
                            <p></p>
                        </div>
                        <div className="project__summary--details__desc--btn-container center-row">
                            <a href="https://diabetesassist.netlify.app/" target="_blank" rel="noreferrer" className={mainBtnClasses}>Try It Out</a>
                            <a href="https://github.com/italiaiello/diabetes-assist-v2" target="_blank" rel="noreferrer" className={alternateBtnClasses}>See Code on GitHub</a>
                        </div>
                    </article>
                </article>
                
            </article>
            
        </section>
    )
}

export default DiabetesAssist
