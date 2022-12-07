import logo from './logo.svg';
import './App.css';
import { Router, BrowserRouter, Route, Link, Routes, useLocation } from "react-router-dom";
import React, {useEffect, useState} from "react";

const returnArrVal = (hash) => {
  let arrVal = 0;
  switch (hash) {
    case "#basics":
      arrVal = 0;
      break;
    case "#style":
      arrVal = 1;
      break;
    case "#responses":
      arrVal = 2;
      break;
    case "#authentication":
      arrVal = 3;
      break;
    case "#installation":
      arrVal = 4;
      break;
    default:
      arrVal = 0;
  }

  return arrVal;
}

function App() {
  const location = useLocation();
  
  const [value, setValue] = useState(null);

  useEffect(() => {
    console.log("The hash has changed:", location.hash);
    setValue(returnArrVal(location.hash));
  }, [location]);

  return (
    <div className="App">
      <header className="App-header">
          <nav>
            <Link to="#basics">
              <h1>Basics</h1>
              <p>Value returned is {value}</p>
            </Link>
            <Link to="#style">
              <h1>Style</h1>
              <p>Value returned is {value}</p>
            </Link>
            <Link to="#responses">
              <h1>Responses</h1>
              <p>Value returned is {value}</p>
            </Link>
            <Link to="#authentication">
              <h1>Authentication</h1>
              <p>Value returned is {value}</p>
            </Link>
            <Link to="#installation">
              <h1>Installation</h1>
              <p>Value returned is {value}</p>
            </Link>
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
          {/* {location.hash === "#basics" && <Basics loc={location}/>}
          {location.hash === "#style" && <Style loc={location}/>}
          {location.hash === "#responses" && <Responses loc={location}/>}
          {location.hash === "#authentication" && <Authentication loc={location}/>}
          {location.hash === "#installation" && <Installation loc={location}/>} */}


      </header>
    </div>
    
  );
}

export default App;
