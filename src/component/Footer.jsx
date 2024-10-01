import React from "react";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandFacebook } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () =>{
return(
    <>
        <div className="background-color py-3">
        <div className="container">
                    <div className="d-flex align-items-center pb-2 ">
                    <span className="pt-1"><MdEmail className="text-white mr-1" /></span><p className="text-white pt-1">info@spotguard.ae</p>
                <ul className="d-flex w-100 justify-content-center align-items-center">
                    <li className="text-white px-2 text-center pt-1"><Link to ="https://www.instagram.com/accounts/login/"><FaInstagram className="fs-2 icon"/></Link></li>
                    <li className="text-white px-2 pt-1"><Link to ="https://www.linkedin.com/login"><FaLinkedinIn className="fs-2 icon"/></Link></li>
                   <li className="text-white px-2 pt-1"><Link to ="https://www.facebook.com/login.php/"><TbBrandFacebook className="fs-2 icon" /></Link></li>
                </ul>
        </div>
        </div>
        </div>
        <div className="pb-4 backgroundcolor">
            <div className="container">
            <h1 className="pt-4 text-center copyright">Copyright © 2024<span className="text-white px-1"><Link to ="/" className="icon">SpotGuard.ae</Link></span></h1>

            </div>
        </div>
   
    </>
    
   
)
}
export default Footer ;