import React from 'react'

const ContactSection1 = () => {
    return (
        <div>
            <section>
                <div className="container py-3">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="card">
                                <div className="card-body p-4 my-3">
                                    <h4>Get In Touch</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    <h4>Address</h4>
                                    <p>550 Main st Boston MA</p>
                                    <h4>Email</h4>
                                    <p>test@test.com</p>
                                    <h4>Phone</h4>
                                    <p>(555) 555-5555</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="card">
                                <div className="card-body">
                                    <h3 class="text-center mt-5">Please Fill The Form To Contact Us</h3>
                                    <hr></hr>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="First Name "></input>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Last name"></input>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Mail Id "></input>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Phone Number"></input>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea type="text" className="form-control" placeholder="Message "></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <button className="btn btn-outline-danger btn-block">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default ContactSection1
