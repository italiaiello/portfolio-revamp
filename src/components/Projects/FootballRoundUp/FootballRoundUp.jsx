import React from 'react'
import FruImage from '../../../assets/images/FRU.webp'
import NodeIcon from '../../../assets/icons/technical-icons/nodejs.svg'
import GitHubIcon from '../../../assets/icons/technical-icons/github.svg'
import PSequelIcon from '../../../assets/icons/technical-icons/PSequel.png'
import ReactIcon from '../../../assets/icons/technical-icons/react.svg'
import HerokuIcon from '../../../assets/icons/technical-icons/heroku.svg'
import LargePulse from '../../../assets/pulses/large-pulse.webp'
import SmallPulse from '../../../assets/pulses/small-pulse.webp'


const FootballRoundUp = ({ showLargeOrSmall, mainBtnClasses, alternateBtnClasses }) => {

    return (
        <section className="project center-column">
            <article className="project__summary center-row mobile-reverse-col">
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
                <article className="project__summary--details center-row mobile-reverse-col">
                    <article className="project__summary--details__desc">
                        <h3 className="project__summary--details__desc--title">Football Round Up</h3>
                        <p>
                            This was the first application I created on my own. I love playing and watching football, so I thought it would be great to create a project about something I’m passionate about.
                            <br/><br/>
                            I used the SportsDB API to retrieve all the relevant data. This is another full stack project, which was the first one I had coded all on my own after the completion of the Smart Brain project. 
                            <br/><br/>
                            It’s not the prettiest project, but I was mainly focussing on developing my skills with React. This project helped improve my confidence with programming as I was able to see that I was becoming more comfortable with creating basic applications on my own.
                        </p>
                        <div className="project__summary--details__desc--btn-container center-row">
                            <a href="https://football-round-up.netlify.app/" target="_blank" rel="noreferrer" className={mainBtnClasses}>Try It Out</a>
                            <a href="https://github.com/italiaiello/football-round-up" target="_blank" rel="noreferrer" className={alternateBtnClasses}>See Code on GitHub</a>
                        </div>
                    </article>
                    <article className="project__summary--details__fig-and-icons center-column">
                        <figure className="project__summary--details__fig-and-icons--fig">
                            <img src={FruImage} alt="Football Round-Up" className="responsive-img" />
                        </figure>
                        <article className="project__summary--details__fig-and-icons--icons">
                            <figure className="project__summary--details__fig-and-icons--icons__icon center-row" title="React">
                                <img src={ReactIcon} alt="React" className="responsive-img" />
                            </figure>
                            <figure className="project__summary--details__fig-and-icons--icons__icon center-row" title="Node Js">
                                <img src={NodeIcon} alt="Node JS" className="responsive-img" />
                            </figure>
                            <figure className="project__summary--details__fig-and-icons--icons__icon center-row" title="PSequel">
                                <img src={PSequelIcon} alt="PSequel" className="responsive-img" />
                            </figure>
                            <figure className="project__summary--details__fig-and-icons--icons__icon center-row" title="GitHub">
                                <img src={GitHubIcon} alt="GitHub" className="responsive-img" />
                            </figure>
                            <figure className="project__summary--details__fig-and-icons--icons__icon center-row" title="Heroku">
                                <img src={HerokuIcon} alt="Heroku" className="responsive-img" />
                            </figure>
                        </article>
                    </article>
                </article>
            </article>
        </section>
    )
}

export default FootballRoundUp
