import React,{useState} from 'react'
import Pagination from './Pagination'

const Header = ({number, setNumber, totalpages, handleClick}) => {


   
    //console.log('our pages', pages)
    
    return(
        <>
        <header>
            <h1>Movie app</h1>
            <nav>
                
                {/* <p className="pages">{pages.map(no => 
                <span className="no"onClick={()=> 
                    handleClick(no)}key={no}>{no}
                </span>)}
                </p> */}
                {/* <select onChange={(e)=> setNumber(e.target.value)}>
                    <option value="30">Amount 30</option>
                    <option value="60">Amount 60</option>
                    <option value="90">Amount 90</option>
                </select> */}
            </nav>
            
        </header>
        <Pagination totalpages={totalpages} handleClick={handleClick} />
        </>
    )
}

export default Header