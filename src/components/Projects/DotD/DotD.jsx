import React from 'react'
import DotdImage from '../../../assets/images/DotD.webp'
import UnityIcon from '../../../assets/icons/technical-icons/unity.svg'
import VirtualRealityIcon from '../../../assets/icons/technical-icons/virtual-reality.svg'
import AndroidIcon from '../../../assets/icons/technical-icons/Android_robot.svg'
import AppleIcon from '../../../assets/icons/technical-icons/Apple_logo.svg'
import LargePulse from '../../../assets/pulses/large-pulse.webp'
import SmallPulse from '../../../assets/pulses/small-pulse.webp'


const DotD = ({ showLargeOrSmall, mainBtnClasses, alternateBtnClasses }) => {

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
                            <img src={DotdImage} alt="Day of the Dead virtual reality experience" className="responsive-img" />
                        </figure>
                        <article className="project__summary--details__fig-and-icons--icons">
                            <figure className="project__summary--details__fig-and-icons--icons__icon center-row" title="Unity">
                                <img src={UnityIcon} alt="Unity" className="responsive-img" />
                            </figure>
                            <figure className="project__summary--details__fig-and-icons--icons__icon center-row" title="Virtual Reality">
                                <img src={VirtualRealityIcon} alt="VirtualReality" className="responsive-img" />
                            </figure>
                            <figure className="project__summary--details__fig-and-icons--icons__icon center-row" title="Android">
                                <img src={AndroidIcon} alt="Android" className="responsive-img" />
                            </figure>
                            <figure className="project__summary--details__fig-and-icons--icons__icon center-row" title="Apple">
                                <img src={AppleIcon} alt="Apple" className="responsive-img" />
                            </figure>
                        </article>
                    </article>
                    <article className="project__summary--details__desc">
                        <h3 className="project__summary--details__desc--title">Day of the Dead VR</h3>
                        <p>
                            This was another group project that I worked on for university. Our brief was to create an informative and/or social experience using VR. We decided to focus on the Day of the Dead, a Mexican Festival, as the concept intrigued us and we thought it would be fun to replicate aspects of it in a virtual space.
                            <br/><br/>
                            A ’journey companion’ in the form of a floating, decorated skull guides the user through various stages, each stage having a new set of objectives to accomplish. By completing these objectives, more information about the festival is uncovered. 
                            <br/><br/>
                            When the user has progressed through all the stages, they will have a better understanding of what the Day of the Dead festival is about.
                        </p>
                        <div className="project__summary--details__desc--btn-container center-row">
                            <a href="https://drive.google.com/file/d/1z1o1_ot0W0Ik9GLFsQ5pq2Fo3wgmPsrr/view?usp=sharing" target="_blank" rel="noreferrer" className={mainBtnClasses}>Download iOS Build</a>
                            <a href="https://drive.google.com/file/d/1UIdNgtkDCkNSjTqX8c33MSWegHLQjP4G/view?usp=sharing" target="_blank" rel="noreferrer" className={alternateBtnClasses}>Download APK</a>
                        </div>
                    </article>
                </article>
            </article>
        </section>
    )
}

export default DotD
