// import { baseURL } from '../data';
import '../styles/styles.css';
import React, { useState } from 'react';
import bulbOn from './Images/idea (5).png'; 


function Bulb(){ 
    // Hooks 
    const [loading, setLoading] = useState(false) 
    const [loaded, setLoaded] = useState(false)  
    const [headlineOn, setHeadlineOn] = useState(false) 
    const [headlineOff, setHeadlineOff] = useState(false)


    function lightBulbOn() {  
        setLoading(true) 
        setHeadlineOn(true)
        
        setTimeout( () => {
           setLoading(false) 
           setHeadlineOn(false)
           setLoaded(true) 

        }, 2000)

    } 

    function lightBulbOff() {
        setLoading(true)
        setHeadlineOff(true)  
        
        setTimeout( () => {
           setLoading(false) 
           setHeadlineOff(false) 
           setLoaded(!loaded)

        }, 2000)
    }


    return(
        <React.Fragment>
           <div className="container d-flex flex-column justify-content-center align-items-center" style={{width:"100vw", height:"100vh"}}>
        
                <div className={ loading ? "d-none": "images-container"} id="images-container">
                    <i className={ loaded ? "d-none": "fa-solid fa-lightbulb fa-5x"}></i> 
                    <img className={ loaded ? "d-block":"d-none"} src={bulbOn} alt="bulb on"></img>
                </div> 

                <div loading={loading} className={loading ? "d-block":"d-none"}> 
                    <h5 className={headlineOn ? "d-block" : "d-none"}>Turning on...</h5>
                    <h5 className={headlineOff ? "d-block" : "d-none"}>Turning off...</h5>
                    <div class="loading-icons">
                            <span></span> 
                            <span></span>  
                            <span></span> 
                            <span></span> 
                            <span></span>
                    </div>
              </div>

                <div className={ loading ? "d-none" : "d-block"}>
                    <p className={ loaded ? "d-none":"d-block"} >The bulb is OFF</p>
                    <p className={ loaded ? "d-block":"d-none"} >The bulb is ON</p>
                </div>

                <div className="buttons-container">
                    <button type="button" className={ loaded ? "btn btn-success btn-lg m-2 disabled" : "btn btn-success btn-lg m-2"} id="button-on" onClick={lightBulbOn}>ON</button>
                    <button type="button" className={ loaded ? "btn btn-danger btn-lg m-2" : "btn btn-danger btn-lg m-2 disabled"} id="button-off" onClick={lightBulbOff}>OFF</button>
                </div> 
            </div>
        </React.Fragment>
    )
}

export default Bulb;