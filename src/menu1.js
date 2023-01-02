import React from "react";
import { Link } from "react-router-dom";

export default function Menu1(){
    return(
            <div className="mb-3 row col-lg-12 ">
             
                <nav className="navbar navbar-expand-lg navbar-light">        
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav1" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav1">
                            <ul className="navbar-nav  dropdown-menu.">
                                    <li className="nav-item">
                                        <Link className="m-3 p-3" to = '/home1'>Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="m-3 p-3" to = '/contact'>CongratsCard</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="m-3 p-3" to = '/super'>SuperOverLeague</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="m-3 p-3" to = '/social'>SocialButtons</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="m-3 p-3" to = '/notification'>Notification</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="m-3 p-3" to = '/login'>LoginPage</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="m-3 p-3" to = '/technology'>TechnologyCards</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="m-3 p-3" to = '/responsive'>Responsive</Link>  
                                    </li>
                                    
                            
                            </ul>
                    </div>
            </nav>
            <div className="dropdown">
                <button className="btn bg-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Other Files
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <ul type="disc">
                                    <li className="nav-item">
                                        <Link className="m-3 p-3" to = '/incre'>Increment</Link>  
                                    </li>
                                    <li className="nav-item">
                                        <Link className="m-3 p-3" to = '/fruit'>FruitCounter</Link>  
                                    </li>
                                    <li className="nav-item">
                                        <Link className="m-3 p-3" to = '/feedback'>Feedback</Link>  
                                    </li>
                                    <li className="nav-item">
                                        <Link className="m-3 p-3" to = '/date'>Date</Link>  
                                    </li>
                                    <li className="nav-item">
                                        <Link className="m-3 p-3" to = '/watch'>Watch</Link>  
                                    </li>
                                    <li className="nav-item">
                                        <Link className="m-3 p-3" to = '/fakeproducts'>FakeProducts</Link>  
                                    </li>
                    </ul>
                </div>
                </div>
            </div>

    );

}