import React from 'react'

import './ProjectsSection.scss'
import { displayProject } from '../../functions/displayProject'

const ProjectsSection = () => {

    const allProjects = ['Nervi', 'MassShootingsUS', 'DiabetesAssist', 'FootballRoundUp', 'DotD', 'SmartBrain']

    return (
        <section className="projects-section">
            <h2 className="section-heading">Projects Section</h2>
            {
                allProjects.map((project, index) => {
                    if (index % 2 === 0) {
                        return displayProject(project, 'large')
                    } else {
                        return displayProject(project, 'small')
                    }
                })
            }
        </section>
    )
}

export default ProjectsSection
