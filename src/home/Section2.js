import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faWifi, faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons";
import './Section2.scss';
const Section2 = () => {
    return (
        <div>
            <section id="section-2" className="py-5" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 text-center ">
                            <FontAwesomeIcon icon={faBrain} className="fa-icon mb-3" />
                            <h3>Devlope Skills</h3>
                            <p>While working do more course and gain knowledge ,we also offer free advance course for our developers</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <FontAwesomeIcon icon={faWifi} className="fa-icon mb-3" />
                            <h3>Online Based System</h3>
                            <p> The interview and aplitude test are conducted via online fully online bases work ,presentation also conducted via online </p>
                        </div>
                        <div className="col-md-4 text-center">
                            <FontAwesomeIcon icon={faHandHoldingUsd} className="fa-icon mb-3" />
                            <h3>Make Money</h3>
                            <p>Make money by your skill based on your project and costumer rating the salary has been credited </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section2
