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
          {location.hash === "#basics" && <Basics />}
          {location.hash === "#style" && <Style />}
          {location.hash === "#responses" && <Responses />}
          {location.hash === "#authentication" && <Authentication />}
          {location.hash === "#installation" && <Installation />}
      </header>
    </div>
    
  );
}

function Basics() {
  return <h1>Basics</h1>;
}

function Style() {
  return <h1>Style</h1>;
}

function Responses() {
  return <h1>Responses</h1>;
}

function Authentication() {
  return <h1>Authentication</h1>;
}

function Installation() {
  return <h1>Installation</h1>;
}

export default App;
