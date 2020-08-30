import React from 'react'

const ServicesSection2 = () => {
    return (
        <div>
            <section id="faq" className="p-5 bg-dark text-white">
                <div className="container">
                    <h1 className="text-center">Frequently Asked Questions</h1>
                    <hr></hr>
                    <div className="row ">
                        <div className="col-md-6">
                            <div id="accordion">
                                <div className="card bg-dark ">
                                    <div className="card-header" id="headingOne">
                                        <h5 className="mb-0 ">
                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                                Question One?
                                                </a>
                                        </h5>
                                    </div>

                                    <div id="collapseOne" className="collapse">
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam soluta dolorem, eligendi, provident quibusdam tempora! Commodi excepturi labore sunt, cupiditate quas adipisci magni dolorem, numquam saepe aut est qui asperiores!
                                        </div>
                                    </div>
                                </div>

                                <div className="card bg-dark">
                                    <div className="card-header" id="headingOne">
                                        <h5 className="mb-0">
                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                                                Question Two?
                                            </a>
                                        </h5>
                                    </div>

                                    <div id="collapseTwo" className="collapse">
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam soluta dolorem, eligendi, provident quibusdam tempora! Commodi excepturi labore sunt, cupiditate quas adipisci magni dolorem, numquam saepe aut est qui asperiores!
                                        </div>
                                    </div>
                                </div>

                                <div className="card bg-dark">
                                    <div className="card-header" id="headingOne">
                                        <h5 className="mb-0">
                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                                                Question Three?
                                            </a>
                                        </h5>
                                    </div>

                                    <div id="collapseThree" className="collapse">
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam soluta dolorem, eligendi, provident quibusdam tempora! Commodi excepturi labore sunt, cupiditate quas adipisci magni dolorem, numquam saepe aut est qui asperiores!
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div id="accordion">
                                <div className="card bg-dark">
                                    <div className="card-header" id="headingOne">
                                        <h5 className="mb-0">
                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseFour">
                                                Question Four?
                                            </a>
                                        </h5>
                                    </div>

                                    <div id="collapseFour" className="collapse">
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam soluta dolorem, eligendi, provident quibusdam tempora! Commodi excepturi labore sunt, cupiditate quas adipisci magni dolorem, numquam saepe aut est qui asperiores!
                                        </div>
                                    </div>
                                </div>

                                <div className="card bg-dark">
                                    <div className="card-header" id="headingOne">
                                        <h5 className="mb-0">
                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseFive">
                                                Question Five?
                                            </a>
                                        </h5>
                                    </div>

                                    <div id="collapseFive" className="collapse">
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam soluta dolorem, eligendi, provident quibusdam tempora! Commodi excepturi labore sunt, cupiditate quas adipisci magni dolorem, numquam saepe aut est qui asperiores!
                                        </div>
                                    </div>
                                </div>

                                <div className="card bg-dark">
                                    <div className="card-header" id="headingOne">
                                        <h5 className="mb-0">
                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseSix">
                                                Question Six?
                                            </a>
                                        </h5>
                                    </div>

                                    <div id="collapseSix" className="collapse">
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam soluta dolorem, eligendi, provident quibusdam tempora! Commodi excepturi labore sunt, cupiditate quas adipisci magni dolorem, numquam saepe aut est qui asperiores!
                                        </div>
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

export default ServicesSection2
