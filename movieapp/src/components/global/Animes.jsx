import React from 'react'

export default function Animes(props) {
  const getAnimes = props.animess.map(anime => 
    <div key={anime._id} style={{backgroundImage: `url(${anime.image})`}} className="anime--info-container animate__animated animate__fadeIn animate__delay-1s" title={anime.synopsis}>
      <p className='anime--title'>{anime.title}</p>
      </div>
    )

  return (
    <div className='animes--section '>
      <div className='animes--container '>
      {getAnimes}
      </div>
    </div>
  )
}
