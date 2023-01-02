import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import profile from './profile.png';
import watch from './watch.png';
import './contact.css';
import Menu1 from "./menu1";
export default function Contact (){
    return(
     <><Menu1/>
        <div className="div1 row col-md-12 ">
                <div className="column col-md-3"></div>
                <div className="column col-md-6 ">
                <h1 className="text-center">Congratulations</h1>
                <div className="div2 col-md-12 m-5 p-5 ">
                    <img src={profile} className="profile "/>
                    <h3 className="text-center p-2">Kiran V</h3>
                    <h5 className="text-center p-2">Vishnu Institute of Computer Education and Technology, Bhimavaram</h5>
                    <img src={watch} className="watch "/>
                </div>
                </div>
                <div className="column col-md-3"></div>
        </div>
        </>
    );
}
