import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './super.css';
import rcb from './rcb.png';
import csk from './csk.png';
import Menu1 from "./menu1";

export default function Super()
{
    return(
        <><Menu1/>
        <div className="div3 row col-lg-12 col-md-12">
            
            <div className="column col-lg-3 col-md-3"></div>
                        <div className="column col-lg-6 col-md-6 m-3 p-5">
                                <h1 className="text-center">Super over League</h1>
                                <img src={rcb} className='rcb'/>
                                <img src={csk} className='csk'/>
                        </div>
            <div className="column col-lg-3 col-md-3"></div>
        </div>
        </>
    
    );
}