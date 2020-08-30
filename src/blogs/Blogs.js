import React from 'react'
import BlogsSection1 from './BlogsSection1'
import PageHeader from '../common/PageHeader'

const Blogs = () => {
    return (
        <div>
            <PageHeader header="Read Our Blogs" content="Common Blogs About Our Company" />
            <BlogsSection1 />
        </div>
    )
}

export default Blogs
