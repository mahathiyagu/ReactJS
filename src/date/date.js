import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

export default function Feedback() {  

       function end1(){       
            var datee=document.getElementById("date").value;    
            var date1=new Date(datee)
            document.getElementById("start1").innerHTML="Course Start date is "+ date1.getDate()+"/"+(date1.getMonth()+1)+"/"+date1.getFullYear();
            date1.setDate(date1.getDate(datee)+90)
            document.getElementById("end1").innerHTML="Course end date is "+ date1.getDate()+"/"+(date1.getMonth()+1)+"/"+date1.getFullYear();
       }
       
  return (
    <div>
        <input type="date" id="date"></input>
        <button className="btn bg-primary text-white" onClick={end1}>Course End Date</button>
        <h5 id="start1"></h5>
        <h5 id="end1"></h5>
        
       
     
    </div>
  );
}