import React from 'react'
import SmartBrainImage from '../../../assets/images/smart-brain.png'
import D3Icon from '../../../assets/icons/technical-icons/d3.svg'
import GitHubIcon from '../../../assets/icons/technical-icons/github.svg'
import ReactIcon from '../../../assets/icons/technical-icons/react.svg'


const SmartBrain = ({ largePulse, smallPulse, showLargeOrSmall }) => {

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
                <article className="project__summary--details center-row">
                    <article className="project__summary--details__desc">
                        <h3 className="project__summary--details__desc--title">Smart Brain</h3>
                        <p>
                            Using the Clarifai API, this application can apply facial recognition to images. Simply paste a link in the detection bar and rectangles will be drawn around all the faces in the specified image.
                            <br/><br/>
                            I made this as part of a Udemy course titled <span className="italic-text">The Complete Web Developer in 2019</span>, led by Andrei Neagoie. I wanted to learn how to use the React library, and this course helped me rapidly improve my skills and gain the confidence I needed to start building things on my own.
                        </p>
                        <div className="project__summary--details__desc--btn-container center-row">
                            <a href="https://github.com/italiaiello/facerecognitionbrain" target="_blank" rel="noreferrer" className="btn">Try It Out</a>
                            <a href="https://github.com/italiaiello/smart-brain-api" target="_blank" rel="noreferrer" className="btn">See Code on GitHub</a>
                        </div>
                    </article>
                    <article className="project__summary--details__fig-and-icons center-column">
                        <figure className="project__summary--details__fig-and-icons--fig">
                            <img src={SmartBrainImage} alt="Diabetes Assist" className="responsive-img" />
                        </figure>
                        <article className="project__summary--details__fig-and-icons--icons">
                            <figure className="project__summary--details__fig-and-icons--icons__icon center-row">
                                <img src={D3Icon} alt="D3" className="responsive-img" />
                            </figure>
                            <figure className="project__summary--details__fig-and-icons--icons__icon center-row">
                                <img src={GitHubIcon} alt="GitHub" className="responsive-img" />
                            </figure>
                            <figure className="project__summary--details__fig-and-icons--icons__icon center-row">
                                <img src={ReactIcon} alt="React" className="responsive-img" />
                            </figure>
                        </article>
                    </article>
                </article>
            </article>
        </section>
    )
}

export default SmartBrain
