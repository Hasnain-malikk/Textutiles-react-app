import React, { useState } from 'react';
import './App.css';
import AboutUs from './components.js/AboutUs';
import NavBar from './components.js/NavBar';
import TextForm from './components.js/TextForm';
import Alert from './components.js/Alert';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [textt, setTextt] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);
  const [myStyle,setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
    border: '1px solid white',
    borderRadius:'9px'
})

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1800);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setTextt('Disable Dark Mode');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been activated', 'success');
      setMyStyle({
        color: "white",
        backgroundColor: "#042743",
    })
    } 
    else 
    {
      setMode('light');
      setTextt('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been activated', 'success');
      setMyStyle({
        color: "black",
        backgroundColor: "white"})
    }
  };

  return (
    <>
     <Router>
      <NavBar title="Textutile" about="About" home="Home" mode={mode} textt={textt} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/"element={<TextForm mode={mode} showAlert={showAlert} />} />
          <Route exact path="/about" element={<AboutUs myStyle={myStyle} />} />
        </Routes>
      </div>
     </Router>
    </>
  );
}

export default App;
