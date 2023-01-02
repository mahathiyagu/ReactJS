import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

export default function Fakeproducts(){
        const [products,setProducts]=useState([])
        useEffect(()=>{
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
        })
    return(
        <div className="row justify-content-center text-center col-lg-12">
                {products.map((value,index)=>(
                    <div className="card shadow col-lg-3 m-3 pt-3 pb-3">
                        <img src={value.image} className='container' height="300px" width="200px" />
                            <div className="card-body row col-lg-12">
                                    <h6 className="card-title col-lg-12 ">{value.title}</h6>                               
                                    <h6 className="col-lg-12"><StarRatings rating={value.rating.rate} starDimension="20px" starRatedColor="goldenrod"/></h6>  
                            </div>
                               
                           <Link to={`/fakedetails/${value.id}`}><button className="card--img-bottom btn bg-primary text-white">View More</button></Link>

                    </div>
                )
                )}
            </div>

    );
}