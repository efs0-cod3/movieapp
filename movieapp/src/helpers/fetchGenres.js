import { useEffect, useState } from "react";

export const fetchGenres = () => {

    const [genres, getGenres] = useState([])

    useEffect(() => {
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '4d6ecc08fbmsh4b36dbb74d831efp15fe8ajsn9f92fe369271',
            'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
          }
        };
        
        fetch('https://anime-db.p.rapidapi.com/genre', options)
          .then(response => response.json())
          .then(response => getGenres([response]))
          .catch(err => console.error(err));
      }, [])

      return genres
} 