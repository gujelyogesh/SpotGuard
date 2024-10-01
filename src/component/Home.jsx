import React from "react";
import Header from "./Header";
import SectionKey from "./SectionKey";
import CarouselSlider from "./CarouselSlider";
import { IoIosArrowForward } from "react-icons/io";
import Footer from "./Footer";
import Counter from "./Counter";
const Home = () => {
    return (
        <>
         <Header/>
         <div className="w position-relative">
    <img src="images/pexels-tima-miroshnichenko.jpg" className="img-flui" alt="img"/>
         </div>
    {/* container start */}
    <div className="container">
        <div className="position-absolute top-36 ">
        <h1 className="text-Cleaning display-6">#1 Cleaning Service in Dubai</h1>
        <div>
        <p className="text-white"><span className="text-white mr-1">✓</span>Book in under 60 seconds</p>
        <p className="text-white"><span className="text-white mr-1">✓</span>Our cleaners are all highly trained, full-time employees</p>
        <p className="text-white"><span className="text-white mr-1">✓</span>We bring all our supplies and equipmen</p>
        <div className="w-100 pt-4">
        <button type="btn" className="btn warning rounded-4 w-75">Book Your SpotGuard Cleaner</button>
        </div>
        </div> 
         </div>
         {/*  */}
         <div className="section pt-3">
        <div className="row">
            <div className="col-md-6">
            <img className="rounded-5 w-100" src="images/pexels-gantas.jpg" />
            </div>
            <div className="col-md-6">
            <h2 className="mt-5 display-6 pb-4">About SpotGuard.AE</h2>
            <p className="text-center">Premier cleaning in the UAE for residential and commercial spaces across Dubai, Abu Dhabi, and Sharjah. Our expert team delivers spotless, eco-friendly results with cutting-edge equipment at competitive rates. Contact us for a free quote and experience the SpotGuard difference!</p>
            </div>
        </div>
         </div>
                  <SectionKey/>
        </div>
        <div className="bg-dark mt-3">
        <div className="container">
         <CarouselSlider/>
        </div>
        </div>
        <div className="container">
             <div className="pt-4">
                 <h1 className="display-6 text-centerl fw-bold pb-4">Why Choose SpotGuard for Residential Cleaning in Dubai?</h1>
             </div>
       <div className="d-flex pb-2">
      <span> <IoIosArrowForward className="mt-1 mr-2"/></span>
        <p className="pd-3">Expert Team:Our cleaners are highly trained, experienced, and dedicated to delivering exceptional results.</p>
        </div>
        <div className="d-flex pb-2">
        <spn><IoIosArrowForward className="mr-2 mt-1"/></spn>
        <p className="">Eco-Friendly Products: We use environmentally friendly cleaning products that are safe for your family and pets.</p>
        </div>
        <div className="d-flex pb-2">
            <span>
            <IoIosArrowForward className="mr-2 mt-1"/>
            </span>
        <p className=""> Flexible Scheduling: We offer convenient scheduling options to fit your busy lifestyle.</p>
        </div>
        <div className="d-flex pb-2">
        <span><IoIosArrowForward className="mr-2 mt-1"/></span>
        <p className=""> Competitive Pricing: Our services are competitively priced to provide excellent value without compromising on quality.</p>
        </div>
        <div className="d-flex pb-2">
        <span><IoIosArrowForward className="mr-2 mt-1"/></span>
        <p> Customer Satisfaction: Your satisfaction is our top priority. We strive to exceed your expectations with every clean.</p>
        </div>

</div>


<div className="pt-5 ">
    <img src = "images/New-Apartment.jpg"></img>
</div>
<div className="container">
<Counter/>
</div>
<Footer/>
    
               
            
            
                
        </>
    )
}
export default Home;