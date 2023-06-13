import './App.css'
import Alert from './components/Alert'
import Navbar from './components/Navbar'
import About from './components/About'
import TextForm from './components/TextForm'
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light') // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('dark mode has been enabled', 'success')
      document.title = 'TextUtils - Dark Mode'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('light mode has been enabled', 'success')
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} >
            </Route>
            <Route exact path="/home" element={<TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode} />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
