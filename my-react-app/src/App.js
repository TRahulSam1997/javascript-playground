import logo from './logo.svg';
import './App.css';
import { Router, BrowserRouter, Route, Link, Routes, useLocation } from "react-router-dom";
import React from "react";


function App() {
  const location = useLocation();
  
  return (
    <div className="App">
      <header className="App-header">
          <nav>
            <Link to="#basics">Basics</Link>
            <Link to="#style">Style</Link>
            <Link to="#responses">Responses</Link>
            <Link to="#authentication">Authentication</Link>
            <Link to="#installation">Installation</Link>
          </nav>

          {/* Without useLocation() hook 👇 */}
          {/* <Routes>
            <Route exact path="#basics" component={Basics} />
            <Route exact path="#about" component={Style} />
            <Route exact path="#responses" component={Responses} />
            <Route exact path="#authentication" component={Authentication} />
            <Route exact path="#installation" component={Installation} />
          </Routes> */}

          {/* With useLocation() hook 👇 */}
          {location.hash === "#basics" && <Basics loc={location}/>}
          {location.hash === "#style" && <Style loc={location}/>}
          {location.hash === "#responses" && <Responses loc={location}/>}
          {location.hash === "#authentication" && <Authentication loc={location}/>}
          {location.hash === "#installation" && <Installation loc={location}/>}
      </header>
    </div>
    
  );
}

function Basics(loc) {
  console.log("The current URL path is: ", loc.loc.pathname);
  console.log("The current hash path is: ", loc.loc.hash);
}

function Style(loc) {
  console.log("The current URL path is: ", loc.loc.pathname);
  console.log("The current hash path is: ", loc.loc.hash);
}

function Responses(loc) {
  console.log("The current URL path is: ", loc.loc.pathname);
  console.log("The current hash path is: ", loc.loc.hash);
}

function Authentication(loc) {
  console.log("The current URL path is: ", loc.loc.pathname);
  console.log("The current hash path is: ", loc.loc.hash);
}

function Installation(loc) {
  console.log("The current URL path is: ", loc.loc.pathname);
  console.log("The current hash path is: ", loc.loc.hash);
}

export default App;
