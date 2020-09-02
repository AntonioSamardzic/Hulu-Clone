import React, { forwardRef } from "react"
import "./VideoCard.css"
import requests from "./requests.js"
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt"

const base_url = "https://image.tmdb.org/t/p/original/"

const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="videocard">
      <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`}></img>
      <p className="description">{movie.overview}</p>
      <h2>{`${movie.title || movie.original_name}`}</h2>
      <p className="likes">
        <ThumbUpAltIcon></ThumbUpAltIcon>
        {movie.vote_count}
      </p>
    </div>
  )
})

export default VideoCard
