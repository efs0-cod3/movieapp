import React from  "react"
import {nanoid} from 'nanoid'

export default function Sidebar(props) {

    const genresElements = props.genres.map(gen => 
        // console.log(gen)
        gen.map(gen => (<li className="genreList" key={nanoid()} onClick={props.handleEvent}>{gen._id}</li>))       
    )
    
    return (
            <aside className="sidebar_container">
                <div className="genre">
                    <h2>Genres</h2>
                </div>
                <ol className="genreList--container">
                    {genresElements}
                </ol>
            </aside>
    )
}