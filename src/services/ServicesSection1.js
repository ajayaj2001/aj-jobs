import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faCheckDouble } from "@fortawesome/free-solid-svg-icons";
const ServicesSection1 = () => {
    return (
        <div>
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card text-center">
                                <div className="card-header">
                                    <h3>  <FontAwesomeIcon icon={faCartPlus} />  Basic Plan</h3>
                                </div>
                                <div className="card-body py-2">
                                    <h4 className="card-title">$ 200 /month</h4>
                                    <p>Suscribe the plan to join our club</p>
                                    <ul className="list-group">
                                        <li className="list-group-item"> <FontAwesomeIcon icon={faCheckDouble} className="ml-0" />
                                            <p>Weekly Competetion Conducted</p></li>
                                        <li className="list-group-item"> <FontAwesomeIcon icon={faCheckDouble} className="my-2" />
                                            <p>Full Profession Guiden support</p></li>
                                        <li className="list-group-item"> <FontAwesomeIcon icon={faCheckDouble} className="my-2" />
                                            <p>Weekly Online Programs are conducted</p></li>
                                        <li className="list-group-item"> <FontAwesomeIcon icon={faCheckDouble} className="my-2" />
                                            <p>Top 20 will Get jobs</p></li>
                                    </ul>
                                    <button className="btn btn-danger my-3">Buy Now</button>
                                    <div className="card-footer">
                                        <p className="text-muted">1 Month Plan</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card text-center">
                                <div className="card-header">
                                    <h3>  <FontAwesomeIcon icon={faCartPlus} />  Premium Plan</h3>
                                </div>
                                <div className="card-body py-2">
                                    <h4 className="card-title">$ 600 /month</h4>
                                    <p>Suscribe the plan to join our club</p>
                                    <ul className="list-group">
                                        <li className="list-group-item"> <FontAwesomeIcon icon={faCheckDouble} className="ml-0" />
                                            <p>Weekly Competetion Conducted</p></li>
                                        <li className="list-group-item"> <FontAwesomeIcon icon={faCheckDouble} className="my-2" />
                                            <p>Full Profession Guiden support</p></li>
                                        <li className="list-group-item"> <FontAwesomeIcon icon={faCheckDouble} className="my-2" />
                                            <p>Weekly Online Programs are conducted</p></li>
                                        <li className="list-group-item"> <FontAwesomeIcon icon={faCheckDouble} className="my-2" />
                                            <p>Intract with our Profession</p></li>
                                        <li className="list-group-item"> <FontAwesomeIcon icon={faCheckDouble} className="my-2" />
                                            <p>Top 50 will Get jobs</p></li>
                                        <li className="list-group-item"> <FontAwesomeIcon icon={faCheckDouble} className="my-2" />
                                            <p>Directly Speak with Professions any time</p></li>
                                        <li className="list-group-item"> <FontAwesomeIcon icon={faCheckDouble} className="my-2" />
                                            <p>Special course are given</p></li>
                                    </ul>
                                    <button className="btn btn-danger my-3">Buy Now</button>
                                    <div className="card-footer">
                                        <p className="text-muted">1 Month Plan</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card text-center">
                                <div className="card-header">
                                    <h3>  <FontAwesomeIcon icon={faCartPlus} />  Platinum Plan</h3>
                                </div>
                                <div className="card-body py-2">
                                    <h4 className="card-title">$ 1000 /month</h4>
                                    <p>Suscribe the plan to join our club</p>
                                    <ul className="list-group">
                                        <li className="list-group-item"> <FontAwesomeIcon icon={faCheckDouble} className="ml-0" />
                                            <p>Weekly Competetion Conducted</p></li>
                                        <li className="list-group-item"> <FontAwesomeIcon icon={faCheckDouble} className="my-2" />
                                            <p>Full Profession Guiden support</p></li>
                                        <li className="list-group-item"> <FontAwesomeIcon icon={faCheckDouble} className="my-2" />
                                            <p>Weekly Online Programs are conducted</p></li>
                                        <li className="list-group-item"> <FontAwesomeIcon icon={faCheckDouble} className="my-2" />
                                            <p>Intract with our Profession</p></li>
                                        <li className="list-group-item"> <FontAwesomeIcon icon={faCheckDouble} className="my-2" />
                                            <p>Top 200 will Get jobs</p></li>
                                        <li className="list-group-item"> <FontAwesomeIcon icon={faCheckDouble} className="my-2" />
                                            <p>Directly help by Professions</p></li>
                                        <li className="list-group-item"> <FontAwesomeIcon icon={faCheckDouble} className="my-2" />
                                            <p>Special Materiels and project are given</p></li>
                                        <li className="list-group-item"> <FontAwesomeIcon icon={faCheckDouble} className="my-2" />
                                            <p>Top 20 directlt enter into company</p></li>
                                    </ul>
                                    <button className="btn btn-danger my-3">Buy Now</button>
                                    <div className="card-footer">
                                        <p className="text-muted">1 Month Plan</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ServicesSection1
