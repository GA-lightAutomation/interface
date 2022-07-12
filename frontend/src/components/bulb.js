import { baseURL } from '../data';
import '../styles/styles.css';
import React, { useEffect, useState } from 'react';


function Bulb(){
    return(
        <React.Fragment>
           <div className="container d-flex flex-column justify-content-center align-items-center">
        
                <div className="images-container" id="images-container">
                    <i className="fa-solid fa-lightbulb fa-5x"></i> 
                </div> style

                <div>
                    <p id="headline-tag">The bulb is OFF</p>
                </div>

                <div className="buttons-container">
                    <button type="button" className="btn btn-success btn-lg m-2" id="button-on">ON</button>
                    <button type="button" className="btn btn-danger btn-lg m-2" id="button-off">OFF</button>
                </div> 
            </div>
        </React.Fragment>
    )
}

export default Bulb;