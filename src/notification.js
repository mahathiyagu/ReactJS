import React from "react";
import './notification.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck,faBell,faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import Menu1 from "./menu1";

function Notification(){
    return(
        <><Menu1/>
        <div className="row containernot  col-lg-12">
            
            <div className="column col-lg-2"></div>
                    <div className="column col-lg-6">
                        <h1 className="text-center hd2">Notifications</h1>
                        <div className="column div5 col-lg-12 m-3 p-3"><h3><FontAwesomeIcon icon={faCircleCheck} className="pr-3"/> Information Message</h3></div>
                        <div className="column div6 col-lg-12 m-3 p-3"><h3><FontAwesomeIcon icon={faCircleCheck} className="pr-3"/> Success Message</h3></div>
                        <div className="column div7 col-lg-12 m-3 p-3"><h3><FontAwesomeIcon icon={faBell} className="pr-3"/>Warning Message</h3></div>
                        <div className="column div8 col-lg-12 m-3 p-3"><h3><FontAwesomeIcon icon={faExclamationCircle} className="pr-3"/>Error Message</h3></div>
                        
                    </div>
            <div className="column col-lg-2"></div>
        </div>
        </>
    );
}

export default Notification;