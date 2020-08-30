import React from 'react'
import AboutSection2 from './AboutSection2'
import AboutSection3 from './AboutSection3'
import AboutSection4 from './AboutSection4'
import PageHeader from '../common/PageHeader'

const About = () => {
    return (
        <div>
            <PageHeader header="About Us" content="Always Hungery Always Develop" />
            <AboutSection2 />
            <AboutSection3 />
            <AboutSection4 />
        </div>
    )
}

export default About
