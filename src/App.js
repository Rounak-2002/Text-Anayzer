import './App.css';
//import About from './components/About';
import Navbar from'./components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';

{/*import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";*/}

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042454';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    {/*<Navbar title="Text-Utils" aboutText="About Text-Utils"/>*/}
    {/*<Navbar/> 
     <Router>*/}
    <Navbar title="Text-Utils" mode={mode} toggleMode = {toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      {/*<Switch>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/"> */}
        <TextForm  showAlert ={showAlert} heading="Enter The Text to Analyze" mode={mode}/>
      {/* </Route>
      </Switch>
      </Router> */}
      </div>
    </>
  );
}

export default App;
