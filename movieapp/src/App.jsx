import { useState, useEffect } from 'react'
import './reset.css'
import './App.css'
import Navbar from './components/global/Navbar'
import Sidebar from './components/global/Sidebar'
import Animes from './components/global/Animes'



function App() {

const [genres, getGenres] = useState([])
const [searchByGen, setSearchByGen]= useState('Action')
const [animes, setAnimes]= useState([])

function handleEv(e){
  console.log(e.target.textContent);
  setSearchByGen(e.target.textContent);
}

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

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '4d6ecc08fbmsh4b36dbb74d831efp15fe8ajsn9f92fe369271',
        'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
      }
    };
    
    fetch(`https://anime-db.p.rapidapi.com/anime?page=1&size=16&&genres=${searchByGen}&sortBy=ranking&sortOrder=asc`, options)
      .then(response => response.json())
      .then(response => setAnimes(response.data))
      .catch(err => console.error(err)); 
  }, [searchByGen])
  
  

  return (
      <main className="App">
    <Sidebar 
      genres={genres}
      handleEvent={(e) => handleEv(e)}
      />

      <Navbar />
      <Animes 
        animes={animes} />

    </main>
  )
}

export default App
