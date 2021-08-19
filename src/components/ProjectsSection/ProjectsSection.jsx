import React from 'react'
import MassShootingsUS from '../Projects/MassShootingsUS/MassShootingsUS'
import DiabetesAssist from '../Projects/DiabetesAssist/DiabetesAssist'
import LargePulse from '../../assets/pulses/large-pulse.png'
import SmallPulse from '../../assets/pulses/small-pulse.png'

import './ProjectsSection.scss'

const ProjectsSection = () => {
    return (
        <section className="projects-section">
            <h2 className="section-heading">Projects Section</h2>
            <DiabetesAssist largePulse={LargePulse} smallPulse={SmallPulse} showLargeOrSmall={'large'} />
            <MassShootingsUS largePulse={LargePulse} smallPulse={SmallPulse} showLargeOrSmall={'small'} />
            <DiabetesAssist largePulse={LargePulse} smallPulse={SmallPulse} showLargeOrSmall={'large'} />
        </section>
    )
}

export default ProjectsSection
