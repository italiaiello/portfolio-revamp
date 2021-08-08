import React from 'react'
import MassShootingsUS from '../Projects/MassShootingsUS/MassShootingsUS'
import LargePulse from '../../assets/pulses/large-pulse.svg'
import SmallPulse from '../../assets/pulses/small-pulse.svg'

import './ProjectsSection.scss'

const ProjectsSection = () => {
    return (
        <section className="projects-section">
            <h2 className="section-heading">Projects Section</h2>
            <MassShootingsUS largePulse={LargePulse} smallPulse={SmallPulse} showLargeOrSmall={'large'} />
            <MassShootingsUS largePulse={LargePulse} smallPulse={SmallPulse} showLargeOrSmall={'small'} />
        </section>
    )
}

export default ProjectsSection
