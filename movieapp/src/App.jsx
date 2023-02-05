import { useState, useEffect } from 'react'
import './reset.css'
import './App.css'
import Navbar from './components/global/Navbar'
import Sidebar from './components/global/Sidebar'
import Animes from './components/global/Animes'
import { fetchGenres } from './helpers/fetchGenres'
import { fetchAnimes } from './helpers/fetchAnimes'


function App() {

const [searchByGen, setSearchByGen]= useState('Action')


function handleEv(e){
  setSearchByGen(e.target.textContent);
}

  const genres = fetchGenres() //fetch genres in the helper
  const {animes} = fetchAnimes(searchByGen)

  return (
      <main className="App">
    <Sidebar 
      genres={genres}
      handleEvent={(e) => handleEv(e)}
      className="side"
      />

     <section className='main'>
     <Navbar />

       <Animes 
        animess={animes} />
     </section>

    </main>
  )
}

export default App
