import React from "react";
import { Carousel } from 'react-bootstrap';

const CarouselSlider = ()=>{
    return(
        <>
       
                 {/* <div className="row justify-content-center align-items-center " style={{backgroundColor:"#000"}}>
                        <div className="col-md-6">
                            <Carousel>
                                <Carousel.Item >
                                    <div className="">
                                  <h2 className="text-white text-center fs-2 pb-5"> Reliable Cleaning </h2>
                                    </div>
                                <p className="ml-4 text-white text-center">We rely on SpotGuard for all our commercial cleaning needs at our Dubai headquarters. Their team is reliable, efficient, and always exceeds our expectations. They keep our office environment clean and hygienic, which is crucial for our business.</p>
                                </Carousel.Item>

                                <Carousel.Item >
                                    <div className="pt-5">
                                    <h2 className="text-white text-center fs-2 pb-3">Outstanding Retail Cleaning</h2>                                  
                                    </div>
                                    <p className="ml-4 text-white text-center">Maintaining a clean and professional retail space is essential for our business. SpotGuard has been our go-to for commercial cleaning services in Sharjah. Their attention to detail and commitment to quality is outstanding. Highly recommend them to any business in the UAE!</p>

                                </Carousel.Item>
                                <Carousel.Item >
                                <div className="pt-5">
                                <h2 className="text-white text-center fs-2 pb-2"> Spotless Home and Eco-Friendly Products </h2>
                                </div>
                                <p className="text-white text-center ml-4">I've never seen my home this spotless! SpotGuard provided exceptional residential cleaning services, and their attention to detail is unmatched. They use eco-friendly products, which is perfect for my family. Highly recommend them to anyone in Dubai looking for a reliable cleaning service.</p>
                                </Carousel.Item>
                                <Carousel.Item >
                                <div className="pt-5">
                                    <h2 className=" text-white text-center pb-3 fs-2"> Top-notch Cleaning Service in Abu Dhabi </h2>
                                    </div>
                                    <p className="text-white text-center ml-4">After moving to Abu Dhabi, I struggled to find a cleaning company that met my standards until I found [Your Company Name]. Their residential cleaning team is professional, efficient, and trustworthy. My home feels brand new after every visit. Best cleaning service in the UAE!</p>
                                </Carousel.Item>
                                <Carousel.Item >
                                <div className="pt-5">
                                <h2 className="text-white text-center fs-2 pb-3"> A Lifesaver for Busy Families in Sharjah </h2>
                                </div>
                                <p className="text-white text-center ml-4">With three kids and a busy schedule, keeping my home clean was a challenge. SpotGuard has been a lifesaver with their thorough and eco-friendly residential cleaning services. I appreciate their dedication to creating a healthy living environment in Sharjah.</p>
                                </Carousel.Item>
                                <Carousel.Item >
                                <div className="pt-5">
                                <h2 className="text-white text-center fs-2 pb-3"> Exceptional Office Cleaning in Dubai </h2>
                                </div>
                                <p className="text-white text-center ml-4">Our office in Dubai has never looked better thanks to SpotGuard's commercial cleaning services. They are thorough, professional, and use high-quality products. Our workspace is now spotless and more productive. Best cleaning service in the UAE!</p>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="col-md-6">
                            <img src="images/pexels-liliana-drew.jpg" className ="image w-100" alt="pexels-liliana-drew" />
                         </div>

                    </div>  */}

<div className="row pb-4 pt-4">
    <h2 className="pb-3 text-white text-center fs-1">Our Happy Customers</h2>
    <div className="col-md-6 d-flex justify-content-center align-items-center">
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active pb-5">
        <div className="mb-3">
        <h2 className="text-white text-center fs-3 pb-3"> Reliable Cleaning </h2>
        </div>
      <p className="text-white pb-2 text-center">We rely on SpotGuard for all our commercial cleaning needs at our Dubai headquarters. Their team is reliable, efficient, and always exceeds our expectations. They keep our office environment clean and hygienic, which is crucial for our business.</p>
      <div className="row">
        <span className="text-warning text-center">Leila M.</span>
        <div className="text-center ml-6">
        <span className="text-center text-white ml-6">Global Finance Inc.</span>
        </div>
      </div>
    </div>
    <div className="carousel-item pb-5">
        <div className="mb-3">
    <h2 className="text-white text-center fs-3 pb-3">Outstanding Retail Cleaning</h2> 
        </div>
     <p className="text-white pb-2 text-center">Maintaining a clean and professional retail space is essential for our business. SpotGuard has been our go-to for commercial cleaning services in Sharjah. Their attention to detail and commitment to quality is outstanding. Highly recommend them to any business in the UAE!</p>
     <div className="row">
        <span className="text-warning text-center">Omar H.</span>
        <div className="text-center ml-8">
        <span className="text-center text-white ml-8">Fashion Mart, Sharjah</span>
        </div>
        </div>
    </div>
    <div className="carousel-item pb-5">
        <div className="mb-3">
    <h2 className="text-white text-center fs-3 pb-2"> Spotless Home and Eco-Friendly Products </h2>
        </div>
      <p className="text-white text-center pb-2">I've never seen my home this spotless! SpotGuard provided exceptional residential cleaning services, and their attention to detail is unmatched. They use eco-friendly products, which is perfect for my family. Highly recommend them to anyone in Dubai looking for a reliable cleaning service.</p>
      <div className="row">
        <span className="text-warning text-center">Sarah A.</span>
        <div className="text-center ">
        <span className="text-center text-white ">Dubai</span>
        </div>
        </div>
    </div>
    <div className="carousel-item pb-5">
        <div className="mb-3">
    <h2 className="text-white text-center pb-3 fs-3"> Top-notch Cleaning Service in Abu Dhabi </h2>
        </div>
      <p className="text-white text-center pb-2">After moving to Abu Dhabi, I struggled to find a cleaning company that met my standards until I found [Your Company Name]. Their residential cleaning team is professional, efficient, and trustworthy. My home feels brand new after every visit. Best cleaning service in the UAE!</p>
      <div className="row">
        <span className="text-warning text-center">Mohammed K.</span>
        <div className="text-center">
        <span className="text-center text-white">Abu Dhabi</span>
        </div>
      </div>
    
    </div>
    <div className="carousel-item pb-5">
        <div className="mb-3">
    <h2 className="text-white text-center fs-3 pb-2"> A Lifesaver for Busy Families in Sharjah </h2>
        </div>
      <p className="text-white text-center pb-2">With three kids and a busy schedule, keeping my home clean was a challenge. SpotGuard has been a lifesaver with their thorough and eco-friendly residential cleaning services. I appreciate their dedication to creating a healthy living environment in Sharjah.</p>
      <div className="row">
        <span className="text-warning text-center">Fatimah R.</span>
        <div className="text-center">
        <span className="text-center text-white">Sharjah</span>
        </div>
      </div>
    </div>
    <div className="carousel-item pb-5">
        <div className="mb-3">
    <h2 className="text-white text-center fs-3 pb-2"> Exceptional Office Cleaning in Dubai </h2>
        </div>
      <p className="text-white text-center pb-2">Our office in Dubai has never looked better thanks to SpotGuard's commercial cleaning services. They are thorough, professional, and use high-quality products. Our workspace is now spotless and more productive. Best cleaning service in the UAE!</p>
      <div className="row">
        <span className="text-warning text-center">Ahmed S.</span>
        <div className="text-center ml-4">
        <span className="text-center text-white ml-4">Tech Corp. Dubai</span>
        </div>
      </div>
                                           
    </div>
  </div>
  {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button> */}
  {/* <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button> */}
</div>
    </div>
    <div className="col-md-6">
    <img src="images/pexels-liliana-drew.jpg" className ="rounded-4" alt="pexels-liliana-drew" />
    </div>
</div>


                    
        </>
    )
}
export default CarouselSlider;