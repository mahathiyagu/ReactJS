import React from "react";
import './technology.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import data from './data.png';
import iot from './iot.png';
import vr from './vr.png';
import ml from './ml.jpg';
import Menu1 from "./menu1";


function Technology()
{
    return(
        <> <Menu1/>
            <div className="row col-lg-12">
               
                <div className="column col-lg-12 m-2 p-3">
                        <h1 className="hd4">Learn 4.0 Technologies</h1>
                        <h4 className="hd5">Get trained by alumini of IITs and top companies like Amazon, Microsoft, Intel, Qualcomm, etc. Learn directly from professionals involed in Product Development</h4>
                            <div className="row col-lg-12 m-3">
                                    <div className="col-lg-6  p-3">
                                                <div class="card card1 ">                                                   
                                                    <div class="card-body">
                                                        <h5 class="card-title">Data Scientist</h5>
                                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                         
                                                            <img src={data}className='data float-right'/>  
                                                                                                                 
                                                    </div>
                                                </div>
                                                    
                                    </div>
                                           
                                    <div className="col-lg-6 p-3">
                                                    <div class="card card2">
                                                    <div class="card-body">
                                                        <h5 class="card-title">IOT Developer</h5>
                                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                        <img src={iot}className='data1 float-right'/>  
                                                    </div>
                                                   
                                                    </div>

                                    </div>
                            </div>
                            <div className="row col-lg-12 m-3">
                                    <div className="col-lg-6  p-3">
                                                <div class="card card3">
                                                    
                                                    <div class="card-body">
                                                        <h5 class="card-title">VR Developer</h5>
                                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                        <img src={vr}className='data float-right'/>  
                                                        
                                                    </div>
                                                </div>
                                                    
                                    </div>
                                            
                                    <div className="col-lg-6  p-3">
                                                    <div class="card card4">
                                                    <div class="card-body">
                                                        <h5 class="card-title">ML Engineer</h5>
                                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                        <img src={ml}className='data1 float-right'/>  
                                                    </div>
                                                   
                                                    </div>

                                    </div>
                            </div>
                </div>

            </div>
            </>
    );
}

export default Technology;