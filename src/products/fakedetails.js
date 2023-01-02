import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import 'bootstrap/dist/css/bootstrap.css';
import '../responsive/menu.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Fakedetails(){
    const [products,setProducts]=useState([])
    const {id}=useParams()
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/'+id)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    })

    return(
        <div className="row justify-content-center col-lg-12">
            <div className="mr-2 card  shadow col-lg-5">            
                <img src={products.image} className="container pt-5" height="300px" width="200px"/>           
            </div>
                <div className="card shadow  col-lg-6">
                <div className="column card-body p-2 col-lg-12">
                    <h3 className="card-title fakehd1 col-lg-12 text-center p-3">{products.title}</h3>
                    <h5 className="card-title fakehd1 col-lg-12  p-3">{products.category}</h5>

                    <h4 className="col-lg-12 fakehd1">About this Item</h4>
                    <h6 className="col-lg-12 p-3">{products.description}</h6>
                    <h4 className="col-lg-12  p-3">MRP {products.price}</h4>
                    {/* <h5> <StarRatings rating={products.rating["rate"]} starDimension="10px" starRatedColor="darkblue"/></h5> */}    
                    {/* <select>Quantity</select>
                    <option></option>                */}
                    <button className="btn bg-warning mr-2"><FontAwesomeIcon icon={faCartShopping}/> Add to Cart</button>
                    <button className="btn bg-warning ">Buy Now</button>
                  
                </div>
                </div>
        </div>
        
    );

}