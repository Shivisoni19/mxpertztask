import React from 'react'
import './index.css';
import Home from './components/pages/Home';
import Artist from './components/pages/Artist'
import Fan from './components/pages/Fan'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
     <div>
     <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="artist" element={<Artist/>} />
            <Route exact path="fan" element={<Fan/>} />
          </Routes>
        </div>
      </Router>
     </div>
    </>
  )
}

export default App
