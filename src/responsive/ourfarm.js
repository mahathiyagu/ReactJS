import React from "react";
import Menu from "./menu";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './menu.css';
import card1 from './card1.jpg';
import card2 from './card2.jpg';
import card3 from './card3.jpg';
import card4 from './card4.jpg';

export default function OurFarm(){
    return(
        
        <div className="row container-fluid col-lg-12  ">
                <div className=" workdiv column ml-1 col-lg-12">
                    <h1 className="col-lg-12 text-center text-white p-3"> About Our Farm</h1>
                    <p className="col-lg-12 text-center text-white p-3" >Organic agriculture, which is governed by strict government standards, requires that products bearing the orgnaic label are produced without the use of toxic and persistent pesticides and synthetic nitrogen fertilizers, antibiotics, synthetic hormones, genetic engineering practices,sewage sludge or irradiation.</p>
                </div>
                <div className="row workdiv carddiv col-lg-12 ml-1 ">
                    <div className="card-body workdiv2 col-lg-2 p-3 ">
                        <h6 className="card-title">VEGETABLE</h6>
                        <p className="card-text ">Organic products are produced without the use of toxic and persistent pesticides. </p>   
                    </div>
                    <div className="card-body workdiv2 col-lg-2 p-3">
                            <h6 className="card-title">HOW IT WORKS?</h6>
                            <p className="card-text">Organic products are produced without the use of toxic and persistent pesticides.</p>   
                    </div>
                    <div className="card-body workdiv2 col-lg-2 p-3">
                            <h6 className="card-title">FLEXIBILITY</h6>
                            <p className="card-text">Organic products are produced without the use of toxic and persistent pesticides.</p>   
                    </div>
                    <div className="card-body workdiv2 col-lg-2 p-3">
                            <h6 className="card-title">FARM PRODUCTS</h6>
                            <p className="card-text">Organic products are produced without the use of toxic and persistent pesticides. </p>   
                    </div>

                </div>
      
        <div className="row homediv carddiv col-lg-12 ml-1  pb-5">
                    <div className="card-body workdiv2 col-lg-2  ">
                            <img src={card1} className=' card-img'/>
                    </div>
                    <div className="card-body workdiv2 col-lg-2 ">
                            <img src={card2} className=' card-img '/>
                    </div>
                    <div className="card-body workdiv2 col-lg-2">
                            <img src={card3} className='card-img'/>
                    </div>
                    <div className="card-body workdiv2 col-lg-2 ">
                            <img src={card4} className=' card-img-bottom'/>
                    </div>

        </div>
        </div>
        
                
        
);
}