import React, { useState } from "react";
import mango from './mango.jpg';
import banana from './banana.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import '../responsive/menu.css';

export default function Fruit(){
        const[increment1,setincrement1]=useState(0);
        const[increment2,setincrement2]=useState(0);

    return(
        <div className="row col-lg-12  fruitdiv">
            <div className='col-lg-11 m-5 p-3 fruitinnerdiv'>
                    <h1 className="col-lg-12 text-center">Bob ate {increment1} Mangoes {increment2} Bananas </h1>
                <div className="row col-lg-12">
                    <div className="column col-lg-6">                       
                        <img src={mango} className='mango' />
                        <button className="ml-5 fruitbtn btn bg-primary text-white " onClick={()=>setincrement1(increment1+1)}>Eat Mango</button>                       
                    </div>

                        <div className="column col-lg-6">                          
                            <img src={banana} className=' banana' />
                            <button className="ml-5 fruitbtn btn bg-primary text-white " onClick={()=>setincrement2(increment2+1)}>Eat Banana</button>
                           
                        </div>  
                </div>

            </div>
        </div>
    );
}

