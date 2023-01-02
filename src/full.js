import React from "react";
import About from "./responsive/about";
import Home from "./responsive/home";
import OrganicFood from "./responsive/organicfood";
import OurFarm from "./responsive/ourfarm";
import Products from "./responsive/products";
import Testimonial from "./responsive/testimonial";
import Works from "./responsive/works";
import React from "react";

export default function Responsive(){
    return(
        <div>
        <Home/>
        <Works/>
        <About/>
        <OurFarm/>
        <Testimonial/>
        <OrganicFood/>
        <Products/>
        </div>
    );
}
