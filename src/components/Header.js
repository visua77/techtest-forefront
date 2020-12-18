import React,{useState} from 'react'

const Header = ({ setGetMovies}) => {


    return(
        <>
        <header>
            <h1>Movie app</h1>
            <nav>
                <button onClick={()=>setGetMovies(true)}>Get Movies</button>
            </nav>
            
        </header>
        </>
    )
}

export default Header