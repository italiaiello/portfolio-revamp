import React from 'react'
import NerviImage from '../../../assets/images/Nervi.webp'
import HTCViveIcon from '../../../assets/icons/technical-icons/htc-vive-logo.svg'
import UnityIcon from '../../../assets/icons/technical-icons/unity.svg'
import VuforiaIcon from '../../../assets/icons/technical-icons/vuforia.svg'
import AndroidIcon from '../../../assets/icons/technical-icons/Android_robot.svg'
import LargePulse from '../../../assets/pulses/large-pulse.webp'
import SmallPulse from '../../../assets/pulses/small-pulse.webp'


const Nervi = ({ showLargeOrSmall, mainBtnClasses }) => {

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
                            <img src={NerviImage} alt="Nervi virtual reality experience" className="responsive-img" />
                        </figure>
                        <article className="project__summary--details__fig-and-icons--icons">
                            <figure className="project__summary--details__fig-and-icons--icons__icon center-row" title="Unity">
                                <img src={UnityIcon} alt="Unity" className="responsive-img" />
                            </figure>
                            <figure className="project__summary--details__fig-and-icons--icons__icon center-row" title="Vuforia">
                                <img src={VuforiaIcon} alt="Vuforia" className="responsive-img" />
                            </figure>
                            <figure className="project__summary--details__fig-and-icons--icons__icon center-row" title="Android">
                                <img src={AndroidIcon} alt="Android" className="responsive-img" />
                            </figure>
                            <figure className="project__summary--details__fig-and-icons--icons__icon center-row" title="HTC Vive">
                                <img src={HTCViveIcon} alt="HTC Vive" className="responsive-img" />
                            </figure>
                        </article>
                    </article>
                    <article className="project__summary--details__desc">
                        <h3 className="project__summary--details__desc--title">Nervi 360</h3>
                        <p>
                            This project was a part of The Exhibition Sydney, which was held at the Tin Sheds Gallery in the University of Sydney, and later at Australia Square. It showcased the architectural work of Pier Luigi Nervi, and as part of a group of three people, I helped create a VR and AR experience.
                            <br/><br/>
                            The VR experience (shown in the image) allowed you to walk and jump around within a 3D model of the Palazzetto dello Sport, designed by Nervi.
                            <br/><br/>
                            The AR experience had three buildings that the user could interact with. They had the option to either, explode (show what elements make up the building), spin, or create a cross-section of the building.
                        </p>
                        <div className="project__summary--details__desc--btn-container center-row">
                            <a href="https://drive.google.com/file/d/17XE1VcOwG6kXTZkM0CVwpQueb1DtnB-V/view?usp=sharing" target="_blank" rel="noreferrer" className={`${mainBtnClasses} wider-btn`}>Download AR Experience (APK)</a>
                        </div>
                    </article>
                </article>
            </article>
        </section>
    )
}

export default Nervi
