import React from "react"
import "./NavBar.css"
import Movies from "./Movies"
import requests from "./requests"

function NavBar({ setSelectedOption }) {
  return (
    <div className="navbar">
      <div>
        <p onClick={() => setSelectedOption(requests.fetchTrending)}>
          Trending
        </p>
      </div>
      <div>
        <p onClick={() => setSelectedOption(requests.fetchTopRated)}>
          Top Rated
        </p>
      </div>
      <div>
        <p onClick={() => setSelectedOption(requests.fetchSciFi)}>sci-fi</p>
      </div>
      <div>
        <p onClick={() => setSelectedOption(requests.fetchRomanceMovies)}>
          romance
        </p>
      </div>
      <div>
        <p onClick={() => setSelectedOption(requests.fetchActionMovies)}>
          action
        </p>
      </div>
      <div>
        <p onClick={() => setSelectedOption(requests.fetchHorrorMovies)}>
          horror
        </p>
      </div>
      <div>
        <p onClick={() => setSelectedOption(requests.fetchComedyMovies)}>
          Comedy
        </p>
      </div>
      <div>
        <p onClick={() => setSelectedOption(requests.fetchMystery)}>mystery</p>
      </div>
      <div>
        <p onClick={() => setSelectedOption(requests.fetchWestern)}>western</p>
      </div>
      <div>
        <p onClick={() => setSelectedOption(requests.fetchAnimation)}>
          animation
        </p>
      </div>
    </div>
  )
}

export default NavBar
