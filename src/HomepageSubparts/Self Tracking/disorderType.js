import React from "react";
import image from "./image/logo6.png" ;
import "./tracking.css";
import {Link} from "react-router-dom";
import ButtonBases from "./option";

function choose()
{
    return(
        <div>
            <h2 className="topbar">Soothe</h2>
            <div className="belowtopbar">
            <img className="image-handle" src={image}></img>
            <h1 class="headingheadddd">Self Tracking and Assessment Portal</h1>
            </div>

            <div className="center OptionDivision">    
   
                <h3 class="feelingText">I'm feeling ......</h3>
                {/* <div class="forbutton"> */}
                {/* <Link to="/selectoption"><Button style={{backgroundColor: "#f98282"}} variant="contained" color="primary"> Get Started</Button></Link> */}
                {/* </div> */}  
                <div class="imageButtons">
                    <ButtonBases />
                </div>
            </div>
        </div>
    );
}

export default choose;