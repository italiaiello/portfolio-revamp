import React from 'react'
import FruImage from '../../../assets/images/fru.png'
import D3Icon from '../../../assets/icons/technical-icons/d3.svg'
import GitHubIcon from '../../../assets/icons/technical-icons/github.svg'
import ReactIcon from '../../../assets/icons/technical-icons/react.svg'


const FootballRoundUp = ({ largePulse, smallPulse, showLargeOrSmall }) => {

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
                    <h3 className="project__summary--desc__title">Football Round Up</h3>
                    <p>
                        This was the first application I created on my own. I love playing and watching football, so I thought it would be great to create a project about something I’m passionate about.
                        <br/><br/>
                        I used the SportsDB API to retrieve all the relevant data. This is another full stack project, which was the first one I had coded all on my own after the completion of the Smart Brain project. 
                        <br/><br/>
                        It’s not the prettiest project, but I was mainly focussing on developing my skills with React. This project helped improve my confidence with programming as I was able to see that I was becoming more comfortable with creating basic applications on my own.
                    </p>
                    <div className="project__summary--desc__btn-container center-row">
                        <a href="https://italiaiello.github.io/football-round-up/" target="_blank" rel="noreferrer" className="btn">Try It Out</a>
                        <a href="https://italiaiello.github.io/football-round-up/" target="_blank" rel="noreferrer" className="btn">See Code on GitHub</a>
                    </div>
                </article>
                <article className="project__summary--fig-container center-column">
                    <figure className="project__summary--fig-container__fig">
                        <img src={FruImage} alt="Football Round-Up" className="responsive-img" />
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

export default FootballRoundUp
