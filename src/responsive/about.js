import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './menu.css';
import veg from './veg.jpg';


export default function About(){
    return(
       
        <div className="row container-fluid col-lg-12 text-center">
                    <div className=" workdiv2 p-3 col-lg-6">
                        <img src={veg} className='veg col-lg-12'/>
                    </div>
                    <div className="col-lg-6 workdiv2 pt-5 ">
                    <h5 className="text-success frehd  col-lg-12 pt-5">Organic Farm</h5>
                            <h1 className="orghd col-lg-12">Our Promise</h1>
                            <p>How your food is grown or raised can have a major impact on your mental and emotional health as well as the environment</p>
                            <button className="btn bg-warning text-white">LEARN MORE</button>
                    </div>
                </div>    
     


    );
}