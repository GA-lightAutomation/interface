import '../styles/styles.css';
import React from 'react';

function Navbar(){
    return(
        <nav className="nav-bar">
          <div className="nav-menu">

              <div className="nav-logo">
                <a href="index.html"><i className="fa-solid fa-cloud-bolt"></i> Switch</a>
              </div>

          </div>
        </nav>
    )
}

export default Navbar;