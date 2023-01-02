import React from "react";
import './login.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import computer from './computer.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope,faLock,faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Menu1 from "./menu1";

function Login()
{
    return(
        <> <Menu1/>
        <div className="container1 row pt-5 col-lg-12">
           
            <div className=" col-lg-2"></div>
                    <div className="div9 row col-lg-8">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <img src={computer} className="computer"/>
                        </div>
                              <div className="column mt-5 col-lg-8">
                                    <h3 className="m-3 text-center">Member Login</h3>                                    
                                    <button className="input1 ml-5 mb-5 pl-5"><FontAwesomeIcon icon={faEnvelope} className="pr-3"/>Email</button>
                                    <button className="input2 ml-5 mb-5 pl-5"><FontAwesomeIcon icon={faLock} className="pr-3"/>.....</button>
                                    <button className="input3 ml-5 mb-5">LOGIN</button>
                                    <h6 className="hd3 mb-5">Forgot <span className="spn">Username/Password ?</span></h6>
                                    <h6 className="p-3 mb-5 spn">Create your account <FontAwesomeIcon icon={faArrowRight}/></h6>
                              </div>
                              
                    </div>
            <div className="col-lg-1"></div>
        </div>
        </>

    );
}

export default Login;