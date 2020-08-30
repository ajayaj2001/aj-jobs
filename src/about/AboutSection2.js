import React from 'react'
import './AboutSection2.scss'

const AboutSection2 = () => {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 py-3">
                            <h1>What we do?</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum sequi necessitatibus deleniti accusamus provident dignissimos numquam fuga nulla quia voluptatibus, dolore voluptate excepturi accusantium dolores temporibus fugit, voluptas velit omnis!</p><p>

                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum sequi necessitatibus deleniti accusamus provident dignissimos numquam fuga nulla quia voluptatibus, dolore voluptate excepturi accusantium dolores temporibus fugit, voluptas velit omnis!</p>
                        </div>
                        <div className="col-md-6">
                            <img id="img-dp" className="img-fluid rounded-circle d-none d-md-block" src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="..."></img>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutSection2
