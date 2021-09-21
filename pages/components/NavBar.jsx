import React, { useState } from "react";

export default function NavBar() {
  const [Open, setOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(handleToggle("width")<=720 ? true :false);
  

function findWidth() {
    //return screen.width
}
  function handleToggle(params) {
    // alert("hi")
    //console.log(window.location);
  /*   if(params === "width"){
        alert(screen.width);
    }
  if(params === "navBar"){
      setOpen(!Open); 
  }*/
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Danan!
      </a>
      <button
        className="navbar-toggler collapsed"
        type="button"
        onClick={() => handleToggle("navBar")}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {Open && (
        <div className="navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/home">
                Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
