import React from "react";
// import {TECarousel ,TECarouselItem} from 'tw-elements-react'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import { Carousel } from 'react-bootstrap';
const Home = () => {
    return (
        <>
            <div className="container-fulid">
            {/* Carousel start */}
                <Carousel>
                    <Carousel.Item style={{
                        backgroundImage: `url(/images/pexels-tima-miroshnichenko-scaled.jpg)`,
                        backgroundSize: '100% auto',       // Ensures the background covers the entire div
                        backgroundPosition: '0px -257px',  // Center the background image
                    }}>
                        <div className="d-block w-100 position-relative img"
                        />
                        <div className="position-absolute top-20  left-10">
                            <h1 className="heading">#1 Cleaning Service in Dubai</h1>
                            <div className="position-absolute left-20">
                                <p className="text-white">
                                    <span className="text-white">✓</span>
                                    Book in under 60 seconds
                                    <br />
                                    <span className="text-white">✓</span>
                                    Our cleaners are all highly trained, full-time employees
                                    <br />
                                    <span className="text-white">✓</span>
                                    We bring all our supplies and equipmen
                                </p>
                                <button type="btn" className="btn warning">Book Your SpotGuard Cleaner</button>

                            </div>
                        </div>
                        <Carousel.Caption>
                            {/* <h3>First Slide Label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item style={{
                        backgroundImage: `url(/images/pexels-olly.jpg)`,
                        backgroundSize: '100% auto',       // Ensures the background covers the entire div
                        backgroundPosition: '0px -257px',  // Center the background image
                    }}>
                        <div
                            className="d-block w-95 position-relative img"
                        />

                        <div className="position-absolute top-20 left-10">
                            <h1 className="heading">#1 Cleaning Service in Dubai</h1>
                            <div className="position-absolute left-20">
                                <p className="text-white">
                                    <span className="text-white">✓</span>
                                    Book in under 60 seconds
                                    <br />
                                    <span className="text-white">✓</span>
                                    Our cleaners are all highly trained, full-time employees
                                    <br />
                                    <span className="text-white">✓</span>
                                    We bring all our supplies and equipmen
                                </p>
                                <button type="button" className="btn warning ">Book Your SpotGuard Cleaner</button>

                            </div>
                        </div>
                        <Carousel.Caption>
                            {/* <h3>Second Slide Label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item style={{
                        backgroundImage: `url(/images/pexels-mastercowley.jpg)`,
                        backgroundSize: '100% auto',       // Ensures the background covers the entire div
                        backgroundPosition: '0px -257px',  // Center the background image

                    }}>
                        <div
                            className="d-block w-100 position-relative img"
                        />
                        <div className="position-absolute top-20 left-10">
                            <h1 className="heading">#1 Cleaning Service in Dubai</h1>
                            <div className="position-absolute left-20">
                                <p className="text-white">
                                    <span className="text-white">✓</span>
                                    Book in under 60 seconds
                                    <br />
                                    <span className="text-white">✓</span>
                                    Our cleaners are all highly trained, full-time employees
                                    <br />
                                    <span className="text-white">✓</span>
                                    We bring all our supplies and equipmen
                                </p>
                                <button type="button" className="btn warning">Book Your SpotGuard Cleaner</button>
                            </div>
                        </div>
                        <Carousel.Caption>
                            {/* <h3>Third Slide Label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                {/* carousel End */}
            {/* content start */}
            <div className="content">
                <div className="containers pt-5">
            <div className="row d">
                <div className="col-6-lg w-50">
                    <img className="gantas" src ="images/pexels-gantas.jpg"/>
                </div>
                <div className="col-6-lg w-50">
                    <h2 className="pt-5 mt-5">About SpotGuard.AE</h2>
                    <div className="para">
                        <p className="ml-4 pl-4 fs-5">Premier cleaning in the UAE for residential and commercial spaces across Dubai, Abu Dhabi, and Sharjah. Our expert team delivers spotless, eco-friendly results with cutting-edge equipment at competitive rates. Contact us for a free quote and experience the SpotGuard difference!</p>
                           <div className="text-center">
                            <a href="" className="text-white fs-3 link">Click to Learn More</a>
                            </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
            {/* content end */}
            <div className="wrappes mt-5 ">
                <h3 className="text-center">Key Areas of Expertise</h3>
                       <div className="row">
                        <div className="col-4 text-center">
                                <a href="" className="text-center">Residential</a>
                        </div>
                        <div className="col-4" >
                            <a href="">Residential</a>
                        </div>
                        <div className="col-4">
                        <a href="">Residential</a>
                        </div>
                        </div> 
            </div>


            </div>
        </>
    )
}
export default Home;