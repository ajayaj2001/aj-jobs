import React from 'react'
import './Section1.scss'
const Section1 = () => {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100" alt="..."></img>
            <div className="carousel-caption d-none d-md-block mb-4">
              <h5>Online Jobs</h5>
              <p>Do jobs in online it means your are work at home without any stress ,done the job in correct time</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://images.pexels.com/photos/2068975/pexels-photo-2068975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100" alt="..."></img>
            <div className="carousel-caption d-none d-md-block mb-4">
              <h5>Salary !!</h5>
              <p>As your project rating the salary has been credited ,also monthly task has been given to you for extra payout</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://images.pexels.com/photos/3869374/pexels-photo-3869374.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100" alt="..."></img>
            <div className="carousel-caption d-none d-md-block mb-4">
              <h5>Team Work</h5>
              <p>Do Job with your team members , weekly intractive section are conducted always the professions will guide and help you</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}

export default Section1
