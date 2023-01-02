import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './menu.css';
import person from './person.jpg';

export default function Home()
{
    return(
            
                <div className="row container homediv col-lg-12">
                        <div className="column col-lg-6 ml-5 p-5">
                            <h5 className="text-success col-lg-12 col-sm-12 frehd">Fresh Food</h5>
                            <h1 className="orghd col-lg-12 col-sm-12">Organic</h1>
                            <p className="col-lg-12">How your food is grown or raised can have a major impact on your mental and emotional health as well as the environment</p>
                            <button className="btn bg-success text-white">LEARN MORE</button>
                        </div>
                            <div className="col-lg-5 ml-5 pl-5">
                                <img src={person} className='person'/>
                            </div>
                </div>
            
        );
}