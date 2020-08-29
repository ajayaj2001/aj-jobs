import React from 'react'
import './Section1.scss'
const Section1 = () => {
  return (
    <div>
      <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="d-block w-100" alt="..."></img>
            <div class="carousel-caption d-none d-md-block mb-4">
              <h5>Online Jobs</h5>
              <p>Do jobs in online it means your are work at home without any stress ,done the job in correct time</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://images.pexels.com/photos/2068975/pexels-photo-2068975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="d-block w-100" alt="..."></img>
            <div class="carousel-caption d-none d-md-block mb-4">
              <h5>Salary !!</h5>
              <p>As your project rating the salary has been credited ,also monthly task has been given to you for extra payout</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://images.pexels.com/photos/3869374/pexels-photo-3869374.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="d-block w-100" alt="..."></img>
            <div class="carousel-caption d-none d-md-block mb-4">
              <h5>Team Work</h5>
              <p>Do Job with your team members , weekly intractive section are conducted always the professions will guide and help you</p>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}

export default Section1
