import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './menu.css';
import logo from './logo.jpg';

export default function Menu()
{
    return(
        <div className=" row col-lg-12">        
            
            <nav className="navbar pl-5 navbar-expand-lg navbar-light">
                    <Link className="navbar-brand logo p-3" ><img src={logo} className="logoimg"/> ORGANIC</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="m-3 p-3" to='/home' >Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="m-3 p-3" to='/works'>Works</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="m-3 p-3" to='/about'>About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="m-3 p-3" to='/ourfarm'>OurFarm</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="m-3 p-3" to='/testimonial'>Testimonial</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="m-3 p-3" to='/products'>Products</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="m-3 p-3" to='/organicfood'>OrganicFood</Link>
                                    </li>
                            
                            </ul>
                    </div>
            </nav>
        </div>
    );
}