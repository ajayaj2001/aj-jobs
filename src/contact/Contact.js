import React from 'react'
import PageHeader from '../common/PageHeader'
import ContactSection1 from './ContactSection1'
import ContactSection2 from './ContactSection2'
const Contact = () => {
    return (
        <div>
            <PageHeader header="Contact us" content="Fill the below form to conatact us" />
            <ContactSection1 />
            <ContactSection2 />
        </div>
    )
}

export default Contact

