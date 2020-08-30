import React from 'react'
import ServicesSection1 from './ServicesSection1'
import PageHeader from '../common/PageHeader'
import ServicesSection2 from './ServicesSection2'

const Services = () => {
    return (
        <div>
            <PageHeader header="Services" content="We provide all the required Services based on your plan" />
            <ServicesSection1 />
            <ServicesSection2 />
        </div>
    )
}

export default Services
