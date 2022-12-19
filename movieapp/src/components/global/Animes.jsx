import React from 'react'

export default function Animes(props) {
  const getAnimes = props.animes.map(anime => 
    <div key={anime._id} style={{backgroundImage: `url(${anime.image})`}} className="anime--info-container" title={anime.synopsis}>
      <p className='anime--title'>{anime.title}</p>
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
