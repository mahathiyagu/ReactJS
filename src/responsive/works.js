import React from "react";
import Menu from "./menu";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './menu.css';
import sheep from './sheep.jpg';
import leaf from './leaf.png';
import straw from './straw.jpg';
import fruit from './fruits.jpeg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faTractor } from "@fortawesome/free-solid-svg-icons";


export default function Works()
{
    return(
       
        <div className="row workdiv container-fluid m-2 col-lg-12">
            <div className="column col-lg-12">
                    <h1 className="col-lg-12 text-center text-white m-2 p-3"> How it Works ?</h1>
                    <p className="col-lg-12 text-center text-white m-2 p-3" >Organic agriculture, which is governed by strict government standards, requires that products bearing the orgnaic label are produced without the use of toxic and persistent pesticides and synthetic nitrogen fertilizers, antibiotics, synthetic hormones, genetic engineering practices,sewage sludge or irradiation.</p>
            </div>
            <div className="row carddiv col-lg-12 p-2 m-2">
                    <div className=" col-lg-3 p-2 m-2">                        
                        <img src={sheep} className='sheep card-img'/>                        
                    </div>
                            <div className="card text-center col-lg-3 p-2 m-2">
                                    <div>
                                        <img src={leaf} className='leaf'/>
                                        <h5 className="card-title">Organic</h5>
                                        <p className="card-text">Organic products are produced without the use of toxic and persistent pesticides and synthetic nitrogen fertilizers, antibiotics.</p>                           
                                    </div>
                            </div>
                    <div className="col-lg-3 p-2 m-2">
                        <img src={straw} className='straw card-img'/>
                    </div>
                            <div className="card text-center col-lg-3 p-2 m-2">
                                    <div>
                                        <FontAwesomeIcon icon={faTractor}/>
                                        <h5 className="card-title">Animal Husbandry</h5>
                                        <p className="card-text">Organic products are produced without the use of toxic and persistent pesticides and synthetic nitrogen fertilizers, antibiotics.</p>                           
                                    </div>
                            </div>
                    <div className=" col-lg-3 p-2 m-2">
                        <img src={fruit} className='fruit card-img'/>
                    </div>
                            <div className="card text-center col-lg-3 p-2 m-2">
                                    <div>
                                        <FontAwesomeIcon icon={faLeaf}/>
                                        <h5 className="card-title">Arable farming</h5>
                                        <p className="card-text">Organic products are produced without the use of toxic and persistent pesticides and synthetic nitrogen fertilizers, antibiotics.</p>                           
                                    </div>
                            </div>

            </div>
        </div>

                

      
    

    );
}