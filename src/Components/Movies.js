import React, { useState, useEffect } from "react"
import "./Movies.css"
import VideoCard from "./VideoCard"
import axios from "./axios"
import requests from "./requests"
import FlipMove from "react-flip-move"

function Movies({ selectedOption }) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption)
      setMovies(request.data.results)
      console.log(request)
      return request
    }

    fetchData()
  }, [selectedOption])

  return (
    <div className="movies">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  )
}

export default Movies
