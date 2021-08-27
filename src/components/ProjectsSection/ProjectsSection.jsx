import React from 'react'
import MassShootingsUS from '../Projects/MassShootingsUS/MassShootingsUS'
import DiabetesAssist from '../Projects/DiabetesAssist/DiabetesAssist'
import Nervi from '../Projects/Nervi/Nervi'
import FootballRoundUp from '../Projects/FootballRoundUp/FootballRoundUp'
import DotD from '../Projects/DotD/DotD'
import SmartBrain from '../Projects/SmartBrain/SmartBrain'
import LargePulse from '../../assets/pulses/large-pulse.png'
import SmallPulse from '../../assets/pulses/small-pulse.png'

import './ProjectsSection.scss'

const ProjectsSection = () => {
    return (
        <section className="projects-section">
            <h2 className="section-heading">Projects Section</h2>
            <Nervi largePulse={LargePulse} smallPulse={SmallPulse} showLargeOrSmall={'large'} />
            <MassShootingsUS largePulse={LargePulse} smallPulse={SmallPulse} showLargeOrSmall={'small'} />
            <DiabetesAssist largePulse={LargePulse} smallPulse={SmallPulse} showLargeOrSmall={'large'} />
            <FootballRoundUp largePulse={LargePulse} smallPulse={SmallPulse} showLargeOrSmall={'small'} />
            <DotD largePulse={LargePulse} smallPulse={SmallPulse} showLargeOrSmall={'large'} />
            <SmartBrain largePulse={LargePulse} smallPulse={SmallPulse} showLargeOrSmall={'small'} />
        </section>
    )
}

export default ProjectsSection
