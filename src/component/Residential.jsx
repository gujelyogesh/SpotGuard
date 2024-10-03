import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { IoIosArrowForward } from "react-icons/io";
import { LuDot } from "react-icons/lu";
import Counter from "./Counter";

const Residential = () => {
    return (
        <>
            <Header />
            <div className="position-relative">
                <img src="images/pexels-mastercowley.jpg" />
                <div className="d-flex justify-content-center">
                    <div className="text-center top-12 position-absolute">
                        <h1 className="text-white fw-bold my-2 fs-3">Our Residential Cleaning Services</h1>
                    </div>
                </div>
            </div>
            <div className="bg-dark pb-4 px-3">
                <div className="pb-4">
                    <div className="row py-4">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-8 py-2">
                                    <img src="images/pexels-cottonbro-4108712.jpg" ></img>
                                </div>
                                <div className="col-md-4 py-2">
                                    <img src="images/pexels-cottonbro-4107118.jpg" className="h-100" />

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="">
                                <p className="text-white px-3" style={{ lineHeight: "29px", wordSpacing: "2px" }}>Welcome to SpotGuard.AE, the premier provider of residential cleaning services in Dubai, UAE. We understand the importance of a clean and healthy home, and our team of professional cleaners is dedicated to delivering top-notch cleaning solutions tailored to your needs. Whether you require regular upkeep or a thorough deep clean, we have you covered.</p>
                                <h2 className="text-warning font-weight px-3 fs-2 pt-2">General Cleaning</h2>
                            </div>
                            <div className="pt-3">
                                <p className="text-white px-3" style={{ lineHeight: "30px", wordSpacing: "2px" }}>Our general cleaning service ensures your home remains spotless and inviting. We cover all essential areas, including dusting, vacuuming, mopping, and sanitizing surfaces. Perfect for maintaining a clean and comfortable living environment.</p>
                                <h2 className="text-warning font-weight px-3 fs-2 pt-2">Deep Cleaning</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-4 py-3">
                                    <img src="images/pexels-karolina-grabowska-4239125.jpg"></img>
                                </div>
                                <div className="col-md-8 py-3">
                                    <img src="images/pexels-karolina-grabowska-4239146.jpg" className="h-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="">
                                <p className="text-white px-3" style={{ lineHeight: "30px", wordSpacing: "2px" }}>For a comprehensive clean that reaches every corner of your home, our deep cleaning service is ideal. We tackle hard-to-reach areas, deep-clean carpets, and upholstery, and ensure every surface is meticulously cleaned and sanitized.</p>
                                <h2 className="text-warning font-weight px-3 fs-2 pt-2">Move-In/Move-Out Cleaning</h2>
                            </div>
                            <div className="py-3">
                                <p className="text-white px-3" style={{ lineHeight: "30px", wordSpacing: "2px" }}>Moving can be stressful, but our move-in/move-out cleaning service makes it easier. We prepare your new home for your arrival or leave your old one spotless for the next occupants. Our thorough cleaning process covers every detail, ensuring a smooth transition.</p>
                                <h2 className="text-warning font-weight px-3 fs-2 pt-2">Post Renovation Cleaning</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row py-4">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-7 py-3">
                                    <img src="images/pexels-cottonbro-4107120.jpg" />
                                </div>
                                <div className="col-md-5 py-3">
                                    <img src="images/pexels-shvetsa-12673924.jpg" className="h-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="py-3">
                                <p className="text-white px-3" style={{ lineHeight: "30px", wordSpacing: "2px" }}>Renovations can leave a mess, but our post-renovation cleaning service will make your home shine again. We remove dust, debris, and construction residue, leaving your renovated space clean, safe, and ready to enjoy.</p>
                                <h2 className="text-warning font-weight px-3 fs-2 pt-2">Specialised Cleaning Service</h2>
                            </div>
                            <div className="d-flex pt-3">
                                <span className="text-white fs-2 pl-4"><LuDot /></span>
                                <p className="text-white px-4">Window Cleaning: Crystal clear windows enhance the beauty of your home. Our window cleaning service removes dirt, grime, and smudges, providing a streak-free finish.</p>
                            </div>
                            <div className="d-flex py-3">
                                <span className="text-white fs-2 pl-4"><LuDot /></span>
                                <p className="text-white px-4">Sofa Cleaning: Your sofa is a central piece of your living space. Our sofa cleaning service removes stains, odors, and allergens, leaving your furniture fresh and clean.</p>
                            </div>
                            <div className="d-flex py-3">
                                <span className="text-white fs-2 pl-4"><LuDot /></span>
                                <p className="text-white px-4">Carpet Cleaning: Carpets can harbor dirt and allergens. Our carpet cleaning service deep cleans and rejuvenates your carpets, improving air quality and extending their lifespan.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* container start */}
            <div className="container">
                <div className="py-4 text-center">
                    <h1 className="fw-bold px-4 fs-5">Why Choose SpotGuard for Residential Cleaning in Dubai?</h1>
                </div>
                <div className="d-flex py-2">
                    <span> <IoIosArrowForward className="mt-2 mr-2 fw-bold" /></span>
                    <p className="fs-5">Expert Team:Our cleaners are highly trained, experienced, and dedicated to delivering exceptional results.</p>
                </div>
                <div className="d-flex py-2">
                    <spn><IoIosArrowForward className="mr-2 mt-2 fw-bold" /></spn>
                    <p className="fs-5">Eco-Friendly Products: We use environmentally friendly cleaning products that are safe for your family and pets.</p>
                </div>
                <div className="d-flex py-2">
                    <span>
                        <IoIosArrowForward className="mr-2 mt-2 fw-bold" />
                    </span>
                    <p className="fs-5"> Flexible Scheduling: We offer convenient scheduling options to fit your busy lifestyle.</p>
                </div>
                <div className="d-flex py-2">
                    <span><IoIosArrowForward className="mr-2 mt-2 fw-bold" /></span>
                    <p className="fs-5"> Competitive Pricing: Our services are competitively priced to provide excellent value without compromising on quality.</p>
                </div>
                <div className="d-flex py-2">
                    <span><IoIosArrowForward className="mr-2 mt-2 " /></span>
                    <p className="fs-5"> Customer Satisfaction: Your satisfaction is our top priority. We strive to exceed your expectations with every clean.</p>
                </div>
            </div>
            {/* conatiner end */}
            {/* images section start */}
            <div className="py-4 ">
                <img src="images/New-Apartment.jpg"></img>
            </div>
            {/* images section end */}
            <div className="container">
                <Counter />
            </div>
            <Footer />
        </>
    )
}

export default Residential;