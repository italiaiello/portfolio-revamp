import React from 'react'
import DotdImage from '../../../assets/images/dotd.JPG'
import D3Icon from '../../../assets/icons/technical-icons/d3.svg'
import GitHubIcon from '../../../assets/icons/technical-icons/github.svg'
import ReactIcon from '../../../assets/icons/technical-icons/react.svg'


const DotD = ({ largePulse, smallPulse, showLargeOrSmall }) => {

    const openAppleDownload = () => window.open('https://drive.google.com/file/d/1z1o1_ot0W0Ik9GLFsQ5pq2Fo3wgmPsrr/view?usp=sharing', '_blank')
    const openAndroidDownload = () => window.open('https://drive.google.com/file/d/1UIdNgtkDCkNSjTqX8c33MSWegHLQjP4G/view?usp=sharing', '_blank')

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
                        <img src={DotdImage} alt="Day of the Dead virtual reality experience" className="responsive-img" />
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
                    <h3 className="project__summary--desc__title">Day of the Dead VR</h3>
                    <p>
                        This was another group project that I worked on for university. Our brief was to create an informative and/or social experience using VR. We decided to focus on the Day of the Dead, a Mexican Festival, as the concept intrigued us and we thought it would be fun to replicate aspects of it in a virtual space.
                        <br/><br/>
                        A ’journey companion’ in the form of a floating, decorated skull guides the user through various stages, each stage having a new set of objectives to accomplish. By completing these objectives, more information about the festival is uncovered. 
                        <br/><br/>
                        When the user has progressed through all the stages, they will have a better understanding of what the Day of the Dead festival is about.
                    </p>
                    <div className="project__summary--desc__btn-container center-row">
                        <button className="btn" onClick={openAppleDownload}>Download iOS Build</button>
                        <button className="btn" onClick={openAndroidDownload}>Download APK</button>
                    </div>
                </article>
            </article>
        </section>
    )
}

export default DotD
