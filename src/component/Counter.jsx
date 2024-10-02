import React from "react";
import CountUp from 'react-countup';
const Counter = () => {
    return (
        <>
            {/* <div className="py-4">
                <div className="counter w-100 mx-auto py-4">
                    <div className="d-flex pt-3 justify-content-center align-items-center">
                        <h3 className="text-white text-center w-50 pl-4 display-6">SpotGuard</h3>
                        <h3 className="text-white display-2 w-50 text-center ">
                            <CountUp className="text-warning text-center " start={0} end={100}></CountUp>
                            <span className="text-warning display-2 ">+</span></h3>
                        <h3 className="text-white text-center w-50 display-6 ">Years Of</h3>
                    </div>
                    <div className="d-flex pt-3 justify-content-center align-items-cente">
                        <h3 className="text-white text-center w-50 display-6">Cleaners</h3>
                        <h3 className="text-white text-center w-50 display-6">Happy Clients</h3>
                        <h3 className="text-white text-center w-50 display-6">Experience</h3>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <h3 className="text-white text-center w-50 display-2">
                            <CountUp className="text-warning text-center text-warning " start={0} end={30}></CountUp>
                       <span className="text-warning">+</span></h3>
                        <h3 className="text-white text-center w-50 display-1 ml-5 ">
                        <CountUp className="text-warning text-center " start={0} end={5}></CountUp>
                        <span className="text-warning">+</span>
                        </h3>
                    </div>
                </div>

            </div> */}
            <div className="pb-5">
                <div className="counter w-100 mx-auto py-4">
                    <div className="row">
                        <div className="col-md-4">
                        <h3 className="text-white text-center pl-4 display-6 pb-2">SpotGuard</h3>
                        </div>
                        <div className="col-md-4">
                        <h3 className="text-white display-2 text-center pb-2 ">
                            <CountUp className="text-warning text-center fw-bold " start={0} end={100}></CountUp>
                            <span className="text-warning display-2 fw-bold  ">+</span></h3>
                        </div>
                        <div className="col-md-4">
                        <h3 className="text-white text-center display-6 pb-2 ">Years Of</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                        <h3 className="text-white text-center pl-4 display-6 py-2">Cleaners</h3>
                        </div>
                        <div className="col-md-4">
                        <h3 className="text-white text-center display-6 py-2 ">Happy Clients</h3>
                        </div>
                        <div className="col-md-4">
                        <h3 className="text-white text-center display-6 py-2 ">Experience</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                        <h3 className="text-white text-center display-2 py-2">
                            <CountUp className="text-warning text-center text-warning fw-bold " start={0} end={30}></CountUp>
                       <span className="text-warning fw-bold ">+</span></h3>
                        </div>
                        <div className="col-md-6 ">
                        <h3 className="text-white text-right mx-5 px-5 py-2 display-1">
                        <CountUp className="text-warning text-center fw-bold " start={0} end={5}></CountUp>
                        <span className="text-warning fw-bold ">+</span>
                        </h3>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default Counter;