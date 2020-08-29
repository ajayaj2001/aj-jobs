import React from 'react'
import './Section3.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
const Section3 = () => {
  return (
    <div>
      <section id="img-head" className="p-5 ">
        <div id="dark-overlay" className="container">
          <div className="row">
            <div class="col pt-5 text-center ">
              <h1>Are you Ready Guys?</h1>
              <p>Join Now ,do simple test get your Job</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-3">
        <div class="container">
          <div className="row">
            <div className="col-md-7 align-self-center">
              <h3>Get Access to our latest softwares</h3>
              <p>Software like Microsoft teams , web storm , advance font awesome , and many more tools our professions teach you
              at beginning
                            </p>
              <button className="btn btn-outline-danger">Learn More</button>
            </div>
            <div className="col-md-5">
              <img src="https://p.jing.fm/clipimg/small/289-2890332_mock-up-laptop-in-png.png"></img>
            </div>
          </div>
        </div>
      </section>
      <section id="video-play">
        <div class="dark-overlay">
          <div class="row">
            <div class="col">
              <div class="container p-5">
                <a
                  href="#"
                  class="video"
                  data-video="https://www.youtube.com/embed/HnwsG9a5riA"
                  data-toggle="modal"
                  data-target="#videoModal"
                >
                  <FontAwesomeIcon icon={faPlay} className="fa-icon" />
                </a>
                <h1>See What We Do</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="modal fade" id="videoModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <button class="close" data-dismiss="modal"><span>&times;</span></button>
              <iframe src="https://www.youtube.com/embed/HnwsG9a5riA" height="350" width="100%" frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Section3
