import React from 'react'
import './PageHeader.scss'
const PageHeader = props => {
    return (
        <div>
            <section id="img-bg" className="text-center text-white py-5" >
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>{props.header}</h1>
                            <p>{props.content}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PageHeader
