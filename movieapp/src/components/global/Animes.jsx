import React from 'react'

export default function Animes(props) {
  const getAnimes = props.animes.map(anime => 
    <div key={anime._id}>
      <img src={anime.image} />
      </div>
    )

  return (
    <div className='animes--section'>
      <div className='animes--container'>
      {getAnimes}
      </div>
    </div>
  )
}
