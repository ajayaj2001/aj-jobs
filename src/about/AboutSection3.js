import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faVolumeUp, faComment, faClock, faTrophy, faGamepad } from "@fortawesome/free-solid-svg-icons";

const AboutSection3 = () => {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="card text-center bg-danger text-white">
                                <FontAwesomeIcon icon={faBrain} className="fa-icon my-4 align-self-center" />
                                <h1>Skills</h1>
                                <p>Develop your skills buy doing Intenships and earn more critificate and money</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card text-center bg-danger text-white">
                                <FontAwesomeIcon icon={faVolumeUp} className="fa-icon my-4 align-self-center" />
                                <h1>Events</h1>
                                <p>Weekly events are conducted regurally join now ,Best 5 will get job directly without interview</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card text-center bg-danger text-white">
                                <FontAwesomeIcon icon={faComment} className="fa-icon my-4 align-self-center" />
                                <h1>Comments</h1>
                                <p>The professions will review your project  also command both postive and negative</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="card text-center bg-danger text-white">
                                <FontAwesomeIcon icon={faClock} className="fa-icon my-4 align-self-center" />
                                <h1>Time </h1>
                                <p>time based project are given to you to improve your time management</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card text-center bg-danger text-white">
                                <FontAwesomeIcon icon={faTrophy} className="fa-icon my-4 align-self-center" />
                                <h1>Events</h1>
                                <p>Weekly events are conducted regurally join now ,Best 5 will get job directly without interview</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card text-center bg-danger text-white">
                                <FontAwesomeIcon icon={faGamepad} className="fa-icon my-4 align-self-center" />
                                <h1>Comments</h1>
                                <p>The professions will review your project  also command both postive and negative</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutSection3
