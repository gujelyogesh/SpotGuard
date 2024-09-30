import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaHandsBubbles } from "react-icons/fa6";
import { MdOutlineDoorFront } from "react-icons/md";


const SectionKey = () => {
    return (
        <>
            <section className="pt-2">
                <h1 className="text-center pt-4 fw-bold fs-1">Key Areas of Expertise</h1>
                <div className="row pt-3">
                    <div className="col-md-4">
                        <div className="d-flex justify-content-center align-items-center">
                            <IoHomeOutline className="fs-1" style={{ color: "#fff", backgroundColor: "#FAD02C" }} />
                        </div>
                        <div className="d-flex justify-center align-items-center pt-2">
                            <a href className="mb-1 fs-1 fw-bold hover">Residential</a>
                        </div>
                        <p className="text-center mb-3 font">Our residential cleaning ensures your home stays spotless, hygienic, and eco-friendly.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex justify-content-center align-items-center ">
                            <MdOutlineDoorFront className="fs-1" style={{ color: "#fff", backgroundColor: "#FAD02C" }} />
                        </div>
                        <div className="d-flex justify-center align-items-center pt-2">
                            <a href className="mb-1 fs-1 fw-bold hover">Commercial</a>
                        </div>
                        <p className="text-center mb-3 font">Our commercial cleaning ensures pristine, professional, and healthy workspaces for businesses of all sizes</p>

                    </div>
                    <div className="col-md-4">
                        <div className="d-flex justify-content-center align-items-center">
                            <FaHandsBubbles className=" fs-1" style={{ color: "#fff", backgroundColor: "#FAD02C" }} />
                        </div>
                        <div className="d-flex justify-center align-items-center pt-2">
                            <a href className="mb-1 fs-1 fw-bold hover">Specialised</a>
                        </div>
                        <p className="text-center font">Our specialized cleaning includes disinfection, upholstery care, and eco-friendly solutions.</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default SectionKey;