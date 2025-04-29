
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

 

function App() {

  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'TextMagic - Dark Mode'; // change the title name after clicking
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
     // document.title = 'TextMagic - Light Mode';
    }

  }
   const [alert, setAlert] = useState( null);
   const showAlert = (message, type) =>{
      setAlert({
        msg:message,
        type: type
      })
      setTimeout(() => {   // after 1.5 sec alert will be desabled... 
        setAlert(null);
      }, 2000);
   }

  return (
    <>
      <Router>
      <Navbar title = "TextMagic" aboutText= "About " mode={mode}  toggleMode= {toggleMode}/>
        <Alert alert = {alert}/>
          <div className="container">
                    <Switch>
                    <Route exact path="/about">  {/* exact is used for when its get exact path then it will render .*/} 
                      <About />
                    </Route>
                     
                    <Route exact path="/">  {/* like /user & /user/home  are two path maybe its create confusion  */}
                    <TextForm heading = "Enter Your Text To Analize Below" showAlert={showAlert} mode={mode}/>
                    </Route>
                  </Switch>
           
          </div>
                  </Router>
    </>

  );
}

export default App;
