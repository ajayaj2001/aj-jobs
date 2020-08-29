import React from 'react'

const AboutSection4 = () => {
    return (
        <div>
            <section class="p-4 bg-dark text-white">
                <div class="container">
                    <h1 className="text-center">Quote's BY Public</h1>
                    <div className="row">
                        <div className="col">
                            <div className="slider">
                                <div>
                                    <blockquote className="blockquote">
                                        <p className="mb-0">“Success is not final; failure is not fatal: it is the courage to continue that counts.”</p>
                                        <footer className="blockquote-footer"> Winston Churchill</footer>
                                    </blockquote>
                                </div>
                                <div>
                                    <blockquote className="blockquote">
                                        <p className="mb-0"> “Play by the rules, but be ferocious.”</p>
                                        <footer className="blockquote-footer"> Phil Knight</footer>
                                    </blockquote>
                                </div>
                                <div>
                                    <blockquote className="blockquote">
                                        <p className="mb-0"> “Business opportunities are like buses, there’s always another one coming.” </p>
                                        <footer className="blockquote-footer"> Richard Branson</footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutSection4
