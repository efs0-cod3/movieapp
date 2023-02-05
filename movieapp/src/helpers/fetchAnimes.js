import { useState, useEffect } from "react";

export const fetchAnimes = (searchByGen) => {
  const [state, setState] = useState({
    animes: [],
    loading: true,
  });

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4d6ecc08fbmsh4b36dbb74d831efp15fe8ajsn9f92fe369271",
        "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
      },
    };

    fetch(
      `https://anime-db.p.rapidapi.com/anime?page=1&size=16&&genres=${searchByGen}&sortBy=ranking&sortOrder=asc`,
      options
    )
      .then((response) => response.json())
      .then((response) =>
        setState({
          animes: response.data,
          loading: false,
        })
      )
      .catch((err) => console.error(err));
  }, [searchByGen]);

  return state;
};
