import React from "react";
import './social.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu1 from "./menu1";


function Social(){
    return(
        <><Menu1/>
        <div className="div4  row col-lg-12">
            
            <div className="row col-lg-12"></div>
            <div className="column col-lg-4"></div>
                <div className="column  p-5  col-lg-5">
                    <h1 className="hd1">Social Buttons</h1> 
                    <button className="bt1 mt-5 mr-5 p-2 pl-3 pr-3">Like</button>
                    <button className="bt2 mr-5 p-2 pl-3 pr-3">Comment</button>
                    <button className="bt3 p-2 pl-3 pr-3">Share</button>
                </div>  
            <div className="column col-lg-3"></div> 
        </div>
        </>
    );
}

export default Social;