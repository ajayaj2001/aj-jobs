import React from 'react'
import './Section4.scss'
const Section4 = () => {
    return (
        <div>
            <section id="gallery" className="py-5">
                <div className="container">
                    <h1 className="text-center">Photo Gallery</h1>
                    <p className="text-center">Check out our photo</p>
                    <div className="row md-5">
                        <div className="col-md-4">
                            <img src="https://images.pexels.com/photos/7070/space-desk-workspace-coworking.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-fluid" alt="..."></img>
                        </div>
                        <div className="col-md-4">
                            <img src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-fluid" alt="..."></img>
                        </div>
                        <div className="col-md-4">
                            <img src="https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-fluid" alt="..."></img>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <img src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-fluid" alt="..."></img>
                        </div>
                        <div className="col-md-4">
                            <img src="https://images.pexels.com/photos/256219/pexels-photo-256219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-fluid" alt="..."></img>
                        </div>
                        <div className="col-md-4">
                            <img src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-fluid" alt="..."></img>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section4
