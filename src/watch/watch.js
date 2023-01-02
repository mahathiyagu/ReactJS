import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../responsive/menu.css';
import StarRatings from "react-star-ratings";



export default function Watch(){
    const [products,setProducts]=useState([])
    useEffect(()=>{
     fetch("http://localhost:3000/watch.json")
    .then(info=>info.json())
    .then(data=>setProducts(data))
    },[])

    return(
        <div className="row watchdiv col-lg-12">
            
            <h1 className="col-lg-12 text-center watchhd1 ">Branded Watches</h1>
            {products.map((view,index)=>(
                
                        <div className="card col-lg-2 d-flex flex-column justify-content-center m-3 p-3">
                            <img src={view.image} className="card-img-top"/>     
                            <div className="card-body row col-lg-12">
                                    <h5 className="card-title watchhd2 text-center col-lg-12 m-2 ">{view.Brand}</h5>
                                    <h6 className="card-title text-center col-lg-12 ">{view.Title}</h6>
                                    <h6 className="card-title text-center col-lg-12 ">{view.Price}</h6>  
                                    <p className="col-lg-12"><StarRatings rating={view.Ratings} starDimension="10px" starRatedColor="darkblue"/></p>       
                            </div>
                             
                            <button className="card--img-bottom btn bg-primary text-white">View More</button>
                        </div>
                
                
            ))}
        </div>
    );
}
