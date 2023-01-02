import React from "react";
import About from "./about";
import Home from "./home";
import OrganicFood from "./organicfood";
import OurFarm from "./ourfarm";
import Products from "./products";
import Testimonial from "./testimonial";
import Works from "./works";


export default function Responsive(){
    return(
        <div className="container-fluid">        
        <Home/>
        <Works/>
        <About/>
        <OurFarm/>
        <Testimonial/>
        <Products/>
        <OrganicFood/>
       
        </div>
    );
}
