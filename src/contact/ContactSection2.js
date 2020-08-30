import React from 'react'
import './ContactSection2.scss'
const ContactSection2 = () => {
    return (
        <div>
            <section className="bg-dark text-center text-white">
                <div className="container py-4">
                    <h1>Our Staff's</h1>
                    <hr></hr>
                    <div className="row mb-5">
                        <div className="col-md-3">
                            <img src="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="rounded-circle img-fluid imge" ></img>
                            <h4>Alan Caller</h4>
                            <small>CEO</small>
                        </div>
                        <div className="col-md-3">
                            <img src="https://images.pexels.com/photos/1586996/pexels-photo-1586996.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="rounded-circle img-fluid imge" ></img>
                            <h4>Ram Sammy</h4>
                            <small>Marking Tech</small>
                        </div>
                        <div className="col-md-3">
                            <img src="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="rounded-circle img-fluid imge" ></img>
                            <h4>Peter Pal</h4>
                            <small>Bussiness Manager</small>
                        </div>
                        <div className="col-md-3">
                            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="rounded-circle img-fluid imge" ></img>
                            <h4>Sam Sunder</h4>
                            <small>web Developer</small>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactSection2
