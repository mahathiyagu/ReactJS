import React from "react";
import Menu from "./menu";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './menu.css';
import fresh from './fresh.png';


export default function OrganicFood(){
    return(
       
        <div className="row col-lg-12 text-center">                    
                    <div className="col-lg-6 workdiv2 pr-3 pt-5 ">
                    <h5 className="text-success frehd  col-lg-12 pt-5">ORGANIC FARM</h5>
                            <h1 className="orghd col-lg-12">Of Organic Food</h1>
                            <p className="para">How your food is grown or raised can have a major impact on your mental and emotional health as well as the environment.Organic agriculture, which is governed by strict government standards, requires that products bearing the orgnaic label are produced without the use of toxic and persistent pesticides and synthetic nitrogen fertilizers, antibiotics, synthetic hormones, genetic engineering practices,sewage sludge or irradiation.</p>
                            <button className="btn bg-warning text-white">LEARN MORE</button>
                    </div>
                    <div className=" workdiv2 p-3 col-lg-6">
                        <img src={fresh} className='fresh col-lg-12'/>
                    </div>
                </div>
      
    );
}