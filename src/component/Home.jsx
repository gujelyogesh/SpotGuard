import React from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
import { Carousel } from 'react-bootstrap';
import Header from "./Header";
import SectionKey from "./SectionKey";
import CarouselSlider from "./CarouselSlider";
const Home = () => {
    return (
        <>
         <Header/>
    <img src="images/pexels-tima-miroshnichenko-scaled.jpg" className="img-flui position-relative" alt="..."/>
    {/* container start */}
    <div className="container">
        <div className="position-absolute top-56">
        <h1 className="text-Cleaning fs-1 pb-4">#1 Cleaning Service in Dubai</h1>
        <div className="">
        <p className="text-white "><span className="text-white mr-1">✓</span>Book in under 60 seconds</p>
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
            <h2 className="mt-5 fs-3 pb-4">About SpotGuard.AE</h2>
            <p className="text-center">Premier cleaning in the UAE for residential and commercial spaces across Dubai, Abu Dhabi, and Sharjah. Our expert team delivers spotless, eco-friendly results with cutting-edge equipment at competitive rates. Contact us for a free quote and experience the SpotGuard difference!</p>
            </div>
        </div>
         </div>
         {/* <SectionKey/> */}
         {/* <div className="">
        <div className="row">
         <div className="col-md-4 ">
            <IoHomeOutline className=""/>
            <p className="fs-5">Premier cleaning in the UAE for residential and commercial spaces across Dubai, Abu Dhabi, and Sharjah. Our expert team delivers spotless, eco-friendly results with cutting-edge equipment at competitive rates. Contact us for a free quote and experience the SpotGuard difference!</p>
                </div>
                <div className="col-md-4">
            <FaHandsBubbles/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam mollitia praesentium sit rem voluptate sint, consectetur cupiditate. Officiis, magnam at? Iusto vel sint dolore eaque impedit laborum ut ullam! Aspernatur.</p>
               
                </div>
                <div className="col-md-4">
            <MdOutlineDoorFront/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum nemo eligendi explicabo, et quasi pariatur ducimus mollitia deleniti dolores eos. Tempore inventore repudiandae eligendi placeat illo a enim harum odio?</p>
                </div>
                </div>
                </div> */}
                  <SectionKey/>
        </div>
        <div className="bg-dark mt-3">
        <div className="container">
         <CarouselSlider/>
        </div>
        </div>
        <div className="container">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tempora accusantium? Beatae ullam consequuntur fugiat laboriosam possimus saepe odio itaque, aliquid, obcaecati maiores praesentium quidem tempore eaque voluptates neque nisi!</p>
</div>
    
               
            
            
                
        </>
    )
}
export default Home;