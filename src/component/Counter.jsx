import React from "react";
import CountUp from 'react-countup';
const Counter = () => {
    return (
        <>
            <div className="py-4">
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

            </div>
        </>
    )
}
export default Counter;