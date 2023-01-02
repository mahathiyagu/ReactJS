import React from "react";
import Menu from "./menu";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './menu.css';
import straw from './straw.jpg';
import veg from './veg.jpg';
import leaf1 from './leaf1.jpg';

export default function Products()
{
    return(
      
        <div className="homediv container-fluid text carddiv row col-lg-12">

                <div className="card col-lg-3 m-3 p-3">
                <img className="card-img-top round" src={straw} height="50%"/>
                        <div className="card-body">
                            <h6>Fresh Fruits</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button className="btn2">Learn more</button>
                        </div>
                </div>
                <div className="card  col-lg-3 m-3 p-3" >
                <img className="card-img-top round" src={veg} height="50%" />
                        <div className="card-body">
                            <h6>Vegetables</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button className="btn2">Learn more</button>
                        </div>
                </div>
                <div className="card col-lg-3 m-3 p-3" >
                <img className="card-img-top round" src={leaf1} height="50%"/>
                        <div className="card-body">
                            <h6>Salad leaves</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button className="btn2">Learn more</button>
                        </div>
                </div>

        </div>
        
        
        
       

    );
}