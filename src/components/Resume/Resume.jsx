import React from 'react'
import "./Resume.scss"

const Resume = () => {
    return (
        <section className="resume section center-column" >
            <h2>Want to see my experience?</h2>
            <hr className="resume__divider" />
            <a href="https://drive.google.com/file/d/1YJ-Gfw03eabUtAGAm73QFPpiE_SG6gGe/view?usp=sharing" target="_blank" rel="noreferrer" className="btn resume__mail-btn">Check out my resume</a>
        </section>
    )
}

export default Resume
