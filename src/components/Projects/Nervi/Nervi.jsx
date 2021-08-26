import React from 'react'
import NerviImage from '../../../assets/images/nervi.JPG'
import D3Icon from '../../../assets/icons/technical-icons/d3.svg'
import GitHubIcon from '../../../assets/icons/technical-icons/github.svg'
import ReactIcon from '../../../assets/icons/technical-icons/react.svg'


const Nervi = ({ largePulse, smallPulse, showLargeOrSmall }) => {

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
                        <img src={NerviImage} alt="Nervi virtual reality experience" className="responsive-img" />
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
                    <h3 className="project__summary--desc__title">Nervi 360</h3>
                    <p>
                        This project was a part of The Exhibition Sydney, which was held at the Tin Sheds Gallery in the University of Sydney, and later at Australia Square. It showcased the architectural work of Pier Luigi Nervi, and as part of a group of three people, I helped create a VR and AR experience.
                        <br/><br/>
                        The VR experience (shown in the image) allowed you to walk and jump around within a 3D model of the Palazzetto dello Sport, designed by Nervi.
                        <br/><br/>
                        The AR experience had three buildings that the user could interact with. They had the option to either, explode (show what elements make up the building), spin, or create a cross-section of the building.
                    </p>
                    <div className="project__summary--desc__btn-container center-row">
                        <button className="btn">Try It Out</button>
                        <button className="btn">See Code on GitHub</button>
                    </div>
                </article>
            </article>
        </section>
    )
}

export default Nervi
