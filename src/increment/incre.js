import React, { useState } from "react";

export default function Incre(){
            const [increment,setincrement]=useState(0);
            
    return(
        <div className="row col-lg-12  p-5">
            <h1 className="col-lg-12 ml-5">{increment}</h1>
            <button className="m-5 p-2" onClick={()=>setincrement(increment+1)}>Increment</button>
            <button className="m-5 p-2"onClick={()=>setincrement(increment-1)}>Decrement</button>
            <button className="m-5 p-2" onClick={()=>setincrement(0)}>Reset</button>
        </div>
    );
}