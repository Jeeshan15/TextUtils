import { useState } from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';


function App() {
  const [mode, setMode] = useState('light'); //
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);

  }
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#044336';
      showAlert("Dark mode has been enabled.", "Success");
      document.getElementById("switch").innerHTML = "LightMode";
      document.title = 'TextUtils - DarkMode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled.", "Success");
     document.getElementById("switch").innerHTML = "DarkMode";
     document.title = 'TextUtils - LightMode';
    }
    
  }
  return (
    <>
    <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
          <div className="container my-3">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
      </div>
    </>
  );
}

export default App;
