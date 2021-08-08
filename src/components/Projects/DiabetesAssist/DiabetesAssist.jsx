import React, { useState } from 'react'
import DiabetesAssistImage from '../../../assets/images/diabetes-assist.png'
import D3Icon from '../../../assets/icons/technical-icons/d3.svg'
import GitHubIcon from '../../../assets/icons/technical-icons/github.svg'
import ReactIcon from '../../../assets/icons/technical-icons/react.svg'


const DiabetesAssist = ({ largePulse, smallPulse, showLargeOrSmall }) => {

    const [showMoreDetails, setShowMoreDetails] = useState(false)

    return (
        <section className="project center-column">
            <article className="project__summary center-row">
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
            </article>
            {
                showMoreDetails ?
                <button className="project__details-btn" onClick={() => setShowMoreDetails(false)}>Hide Details</button>
                :
                <button className="project__details-btn" onClick={() => setShowMoreDetails(true)}>Show Details</button>
            }
            {
                showMoreDetails &&
                <article className="project__details">
                    <h4 className="project__details--title">What is it?</h4>
                    <p>
                        This was a project I worked on for a uni group assignment. Our brief was to find any dataset of our choosing and display this 
                        data in an engaging way through graphs made with JavaScript. These graphs also had to comprise some kind of interaction. 
                        <br /><br />
                        The dataset we settled on comprised all the Mass Shootings in the U.S. over the past 52 years (starting from 2016). We decided on 
                        this as we wanted to use these graphs to showcase something a bit more confronting.
                    </p>

                    <h4 className="project__details--title">How does it work?</h4>
                    <p>
                        To make these graphs, we used D3.js as it provided the most freedom for customisation. Moreover, we paired it with React so 
                        that we could handle state, which made it easier to implement the necessary graph interactions. 
                        <br /><br />
                        We followed many YouTube tutorials to create the graphs we desired, with the large majority of these tutorials coming from a 
                        channel called The Muratorium. Without this channel, I believe we would have definitely struggled to make some of the graphs, 
                        such as the GeoMap depicted in the image.
                        <br /><br />
                        This was the first time I was able to use React for a real project, and it was so amazing to finally put the skills I have 
                        learned to good use. 
                    </p>
                </article>
            }
            {
                showLargeOrSmall === 'large' ?
                <figure className="project__large-pulse">
                    <img src={largePulse} className="responsive-img" alt="Large pulse"/>
                </figure>
                :
                <figure className="project__small-pulse">
                    <img src={smallPulse} className="responsive-img" alt="Small pulse"/>
                </figure>
            }
        </section>
    )
}

export default DiabetesAssist
