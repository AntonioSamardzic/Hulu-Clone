import React, { useState } from "react"

import "./App.css"
import Header from "./Components/Header"
import NavBar from "./Components/NavBar"
import Movies from "./Components/Movies"

import requests from "./Components/requests"

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending)

  return (
    <div className="app">
      <Header></Header>
      <NavBar setSelectedOption={setSelectedOption}></NavBar>
      <Movies selectedOption={selectedOption}></Movies>
    </div>
  )
}

export default App
