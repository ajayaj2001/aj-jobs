import React from 'react'
import './Section3.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";

const Section3 = () => {
  return (
      <div>
        <section id="img-head" className="p-5 ">
          <div id="dark-overlay" className="container">
            <div className="row">
              <div className="col pt-5 text-center ">
                <h1>Are you Ready Guys?</h1>
                <p>Join Now ,do simple test get your Job</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-7 align-self-center">
              <h3>Get Access to our latest softwares</h3>
              <p>Software like Microsoft teams , web storm , advance font awesome , and many more tools our professions teach you
              at beginning
                            </p>
              <button className="btn btn-outline-danger">Learn More</button>
            </div>
            <div className="col-md-5">
              <img src="https://p.jing.fm/clipimg/small/289-2890332_mock-up-laptop-in-png.png" alt="..,"></img>
            </div>
          </div>
        </div>
      </section>
      <section id="video-play">
        <div className="dark-overlay">
          <div className="row">
            <div className="col">
              <div className="container p-5">
                <button
                    href="#"
                    className="video"
                    data-video="https://www.youtube.com/embed/HnwsG9a5riA"
                    data-toggle="modal"
                    data-target="#videoModal"
                >
                  <FontAwesomeIcon icon={faPlay} className="fa-icon"/>
                </button>
                <h1>See What We Do</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="modal fade" id="videoModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <button className="close" data-dismiss="modal"><span>&times;</span></button>
              <iframe title="Youtube video" src="https://www.youtube.com/embed/HnwsG9a5riA" height="350" width="100%" frameBorder="0" allowFullScreen/>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Section3
